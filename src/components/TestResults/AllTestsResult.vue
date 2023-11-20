<script>
import TestResultItem from "@/components/TestResults/TestResultItem.vue";

export default {
  name: "AllTestsResult",
  components: {TestResultItem},
  beforeMount() {
    const testId = this.$route.query.testId;
    const userId = this.$route.query.userId;
    this.fetchTestData(testId);
    this.fetchUserTestData(userId, testId);
    console.log(this.userTest);
  },
}
</script>

<template>
  <div id="all-tests">
    <div id="tests">
      <TestResultItem v-for="test in testsData" :key="test.id" v-bind="test" @start-test="startTestEvent"/>
    </div>
  </div>
</template>

<style scoped>
#all-tests {
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  align-items: center;
}
#tests {
  display: grid;
  width: 70vw;
  margin-left: 15%;
  margin-right: 20%;
  justify-content: center;
  grid-template-columns: 3fr;
}
</style>