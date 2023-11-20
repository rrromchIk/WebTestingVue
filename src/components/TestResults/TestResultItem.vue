<script>
export default {
  name: "TestResultItem",
  props: ["name", "subject", "difficulty", "startingTime", "endingTime", "result"],
}
</script>

<template>
  <div class="test-item card">
    <h5 class="card-header">{{ name }}</h5>
    <div class="card-body">
      <h4 class="card-title">{{ subject }}</h4>
      <p class="card-text"><span class="card-text-bold">Difficulty: </span>{{ difficulty }}</p>
      <p class="card-text"><span class="card-text-bold">Starting time: </span>{{ startingTime }}</p>
      <p class="card-text"><span class="card-text-bold">Ending time: </span>{{ endingTime }}</p>
      <p class="card-text"><span class="card-text-bold">Result: </span>{{ result }} %</p>
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
</style>