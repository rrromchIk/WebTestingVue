<script>
import QuestionDao from "@/service/QuestionDao";
import UserAnswerDao from "@/service/UserAnswerDao";
export default {
  name: "QuestionItem",
  emits: ["endTest"],
  props: ["testName", "question", "userId"],
  data() {
    return {
      answers: [],
      userAnswer: {},
      selectedAnswerId: null
    }
  },
  methods: {
    async fetchAnswers() {
      this.userAnswer = await UserAnswerDao.getUserAnswers(this.userId, this.question.id);
      this.answers = await QuestionDao.getAnswersByQuestionId(this.question.id)
    },
    submitAnswer() {
      if (this.selectedAnswerId !== null) {
        UserAnswerDao.createUserAnswer(this.userId, this.question.id, this.selectedAnswerId);
      } else {
        console.error("Please select an answer before submitting.");
      }
    },
    endTest() {
      this.$emit("endTest");
    }
  },
  watch: {
    question: {
      immediate: true,
      handler() {
        this.fetchAnswers();
      },
    },
  },
}
</script>

<template>
  <div class="question-item">
    <div class="card">
      <h5 class="card-header">{{ testName }}</h5>
      <div class="card-body"><h6 class="card-title">Question </h6>
        <h4 class="card-text">{{ question.text }}</h4>
        <br>
        <form @submit.prevent="submitAnswer">
          <div id="radio-btn-group">
            <div v-for="(answer, index) in answers" :key="index" class="answer-item">
              <input type="radio"
                     name="answer"
                     :key="answer.id"
                     :id="index"
                     :value="answer.text"
                     :checked="answer.id === userAnswer?.selectedAnswerId"
                     @click="selectedAnswerId=answer.id" />
              <label :for="index">{{ answer.text }}</label>
              <br/>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="button" @click="endTest" class="btn btn-danger float-right">End the attempt</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-item {
  padding-left: 10px;
  color: rgb(5, 5, 5);
  width: 70vw;
  height: 70vh;
}

.answer-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Adjust the margin as needed */
}

input[type="radio"] {
  margin-right: 5px; /* Adjust the margin as needed */
}

label {
  margin: 0;
}
</style>