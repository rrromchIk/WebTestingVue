<script>
export default {
  name: "QuestionsSidebar",
  props: [
      "questions"
  ]
}
</script>

<template>
  <div id="questions-sidebar" class="card rounder-3 question-sidebar-card">
    <ul class="list-group list-group-flush">
      <li v-for="(question, index) in questions" :key="question.id" class="list-group-item question-number active">
        <a href="#" class="btn">
          Question {{ index + 1 }}
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
</style>