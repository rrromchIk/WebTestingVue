<script>
import TimerItem from "@/components/TestPassing/TimerItem.vue";
import QuestionItem from "@/components/TestPassing/QuestionItem.vue";
import NavBar from "@/components/NavBar.vue";
import QuestionsSidebar from "@/components/TestPassing/QuestionsSidebar.vue";
import TestDao from "@/service/TestDao";
import UserTestDao from "@/service/UserTestDao";
import UserAnswerDao from "@/service/UserAnswerDao";

export default {
  name: "PassTest",
  components: {
    TimerItem, QuestionItem, NavBar, QuestionsSidebar
  },
  data() {
    return {
      allTestsPage: process.env.VUE_APP_MAIN_PAGE,
      userId: null,
      test: {},
      userTest: {},
      currentQuestion: {},
      remainingTime: -1
    }
  },
  async created() {
    const testId = this.$route.query.testId;
    this.userId = this.$route.query.userId;

    await this.fetchTestData(testId);
    await this.fetchUserTestData(this.userId, testId);

    this.calculateRemainingTime();
  },
  methods: {
    async fetchTestData(testId) {
      const response = await TestDao.getTestById(testId);
      this.test = response.data;
      this.currentQuestion = this.test.questions[0];
    },
    async fetchUserTestData(userId, testId) {
      const response = await UserTestDao.getUserTest(userId, testId);
      this.userTest = response.data;
    },
    calculateRemainingTime() {
      const testDurationMillis = this.test.duration * 60 * 1000;
      const startingTimeMillis = new Date(this.userTest.startingTime).getTime();
      const currentTimeMillis = new Date().getTime();
      const limitTimeMillis = startingTimeMillis + testDurationMillis;

      this.remainingTime = limitTimeMillis - currentTimeMillis;
    },
    submitAnswerHandler(questionAnswerId) {
      UserAnswerDao.createUserAnswer(this.userId, questionAnswerId.questionId, questionAnswerId.answerId);
    },
    timeOutHandler() {
      this.endTestHandler();
      window.open(this.allTestsPage, "_self")
    },
    questionChangedHandler(newQuestion) {
      this.currentQuestion = newQuestion;
    },
    endTestHandler() {
      console.log("end test handler");
    },

  }
}
</script>

<template>
  <NavBar :link-to-all-tests="allTestsPage"/>

  <div id="pass-test">
    <QuestionsSidebar
        v-if="test.id"
        :questions="test.questions"
        @question-changed="questionChangedHandler"/>

    <QuestionItem
        v-if="currentQuestion.id"
        :user-id="userId"
        :test-name="test.name"
        :question="currentQuestion"
        @submit-answer="submitAnswerHandler"
        @end-test="endTestHandler"/>

    <TimerItem
        v-if="remainingTime !== -1"
        :millis="remainingTime"
        @time-out="timeOutHandler"/>
  </div>
</template>

<style scoped>
#pass-test {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

span {
  font-size: large;
}
</style>