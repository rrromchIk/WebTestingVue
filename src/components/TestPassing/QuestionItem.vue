<script>
import QuestionDao from "@/service/QuestionDao";
export default {
  name: "QuestionItem",
  props: [
    "testName", "question"
  ],
  data() {
    return {
      answers: [],
      selectedAnswerId: null
    }
  },
  methods: {
    async fetchAnswers() {
      const response = await QuestionDao.getAnswersByQuestionId(this.question.id)
      this.answers = response.data;
    },
    submitAnswer() {
      if (this.selectedAnswerId !== null) {
        console.log("submit answer: {questionId:" + this.question.id + "}, {answerId:" + this.selectedAnswerId + "}")
        this.$emit("submitAnswer", {
          questionId: this.question.id,
          answerId: this.selectedAnswerId,
        });
      } else {
        console.error("Please select an answer before submitting.");
      }
    },
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
              <input type="radio" :id="index" name="answer" :value="answer.text" @click="selectedAnswerId=answer.id" />
              <label :for="index">{{ answer.text }}</label>
              <br/>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
          <a id="endAttemptButton" href="#" class="btn btn-danger float-right">End the attempt</a>
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