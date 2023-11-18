<script>
import TimerItem from "@/components/TestPassing/TimerItem.vue";
import QuestionItem from "@/components/TestPassing/QuestionItem.vue";
import NavBar from "@/components/TestPassing/NavBar.vue";
import QuestionsSidebar from "@/components/TestPassing/QuestionsSidebar.vue";
import axios from "axios";
export default {
  name: "PassTest",
  components: {
    TimerItem, QuestionItem, NavBar, QuestionsSidebar
  },
  data() {
    return {
      test: {},
      questions: [],
      currentQuestion: {}
    }
  },
  created() {
    const testId = this.$route.query.testId;
    this.fetchTestData(testId);
  },
  methods: {
    async fetchTestData(testId) {
      try {
        const response = await axios.get("https://localhost:7003/api/tests/" + testId);
        this.test = response.data;
        this.questions = this.test.questions;
        this.currentQuestion = this.test.questions[0];
        console.log(this.test);
      } catch (error) {
        console.error("Error fetching tests:", error.toString());
      }
    }
  }
}
</script>

<template>
  <NavBar/>
  <div id="pass-test">
    <QuestionsSidebar :questions="questions"/>
    <QuestionItem :test-name="test.name" :question-text="currentQuestion.text"/>
    <TimerItem :millis="test.duration"/>
  </div>
</template>

<style scoped>
#pass-test{
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

span {
  font-size: large;
}
</style>