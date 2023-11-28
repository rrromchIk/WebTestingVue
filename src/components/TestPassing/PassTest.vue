<script>
import TimerItem from "@/components/TestPassing/TimerItem.vue";
import QuestionItem from "@/components/TestPassing/QuestionItem.vue";
import NavBar from "@/components/NavBar.vue";
import QuestionsSidebar from "@/components/TestPassing/QuestionsSidebar.vue";
import TestDao from "@/service/TestDao";
import UserTestDao from "@/service/UserTestDao";

export default {
  name: "PassTest",
  components: {
    TimerItem, QuestionItem, NavBar, QuestionsSidebar
  },
  data() {
    return {
      allTestsPage: process.env.VUE_APP_MAIN_PAGE,
      resultsPage: process.env.VUE_APP_RESULTS_PAGE,
      userId: null,
      test: {},
      userTest: {},
      currentQuestion: {},
      remainingTime: null
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
      this.test = await TestDao.getTestById(testId);
      this.currentQuestion = this.test.questions[0];
    },
    async fetchUserTestData(userId, testId) {
      this.userTest = await UserTestDao.getUserTest(userId, testId);
    },
    calculateRemainingTime() {
      const testDurationMillis = this.test.duration * 60 * 1000;
      const startingTimeMillis = new Date(this.userTest.startingTime).getTime();
      const currentTimeMillis = new Date().getTime();
      const limitTimeMillis = startingTimeMillis + testDurationMillis;

      this.remainingTime = limitTimeMillis - currentTimeMillis;
    },
    questionChangedHandler(newQuestion) {
      this.currentQuestion = newQuestion;
    },
    timeOutHandler() {
       this.endTestHandler();
    },
    async endTestHandler() {
      console.log("end test handler");

      const completed = await UserTestDao.completeTest(this.userId, this.test.id);
      if(completed) {
        window.open(this.resultsPage + "?userId=" + this.userId, "_self")
      }
    }
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
        @end-test="endTestHandler"/>

    <TimerItem
        v-if="remainingTime !== null"
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