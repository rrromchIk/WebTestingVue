<script>
export default {
  name: "QuestionsSidebar",
  emits: ["questionChanged"],
  props: ["questions"],
  data() {
    return {
      currentQuestion: this.questions[0]
    }
  },
  methods: {
    questionChanged(question) {
      this.currentQuestion = question
      this.$emit("questionChanged", question)
    }
  }
}
</script>

<template>
  <div id="questions-sidebar" class="card rounder-3 question-sidebar-card">
    <ul class="list-group list-group-flush">
      <li v-for="(question, index) in questions" @click="questionChanged(question)"
          :key="question.id"
          :class="{ 'question-number': true, 'list-group-item': true, 'active': question === currentQuestion }">
        <a class="btn">
          {{ index + 1 + ". " + question.text.slice(0, 12) + '...' }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.question-sidebar-card {
  width: 12rem;
  height: min-content;
}

li:hover {
  cursor: pointer;
}
</style>