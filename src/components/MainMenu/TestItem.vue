<script>
export default {
  name: "TestItem",
  emits: ["startTest"],
  props: ["name", "subject", "difficulty", "duration", "questions", "id"],

  methods: {
    startTest(testId) {
      this.$emit("startTest", testId)
    },
  }
}
</script>

<template>
  <div class="test-item card">
    <h5 class="card-header">{{ name }}</h5>
    <div class="card-body">
      <h4 class="card-title">{{ subject }}</h4>
      <p class="card-text"><span class="card-text-bold">Difficulty: </span>{{ difficulty }}</p>
      <p class="card-text"><span class="card-text-bold">Duration: </span>{{ duration }} min</p>
      <p class="card-text"><span class="card-text-bold">Number of questions: </span>{{ questions.length }}</p>
      <a @click="startTest(id)" class="btn btn-success">Start test</a>
    </div>
  </div>
</template>

<style scoped>
.test-item {
  margin-bottom: 15px;
  margin-top: 15px;
}

.test-item:hover {
  transform: scale(1.02);
}

.card-text-bold {
  font-weight: bold;
}

.card {
  opacity: 94%;
}

a {
  color: white;
}
</style>