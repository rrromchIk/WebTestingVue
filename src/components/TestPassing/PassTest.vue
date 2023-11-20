<script>
import TimerItem from "@/components/TestPassing/TimerItem.vue";
import QuestionItem from "@/components/TestPassing/QuestionItem.vue";
import NavBar from "@/components/TestPassing/NavBar.vue";
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
      test: {},
      userTest: {},
      currentQuestion: {}
    }
  },
  beforeMount() {
    const testId = this.$route.query.testId;
    const userId = this.$route.query.userId;
    this.fetchTestData(testId);
    this.fetchUserTestData(userId, testId);
    console.log(this.test);
    console.log(this.userTest);
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
    timeOut() {
      window.open("http://localhost:8080/all-tests", "_self")
    },
    changeCurrentQuestion(newQuestion) {
      this.currentQuestion = newQuestion;
    }
  }
}
</script>

<template>
  <NavBar link-to-all-tests="http://localhost:8080/all-tests"/>

  <div id="pass-test">
    <QuestionsSidebar v-if="test.id" :questions="test.questions" @question-changed="changeCurrentQuestion"/>
    <QuestionItem v-if="currentQuestion.text" :test-name="test.name" :question="currentQuestion"/>
    <!--    <TimerItem v-if="test.id" :millis="test.duration * 60 * 1000"/>-->
    <TimerItem v-if="test.id" :millis="100000" @time-out="timeOut"/>

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