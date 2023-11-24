<script>
import TestResultItem from "@/components/TestResults/TestResultItem.vue";
import NavBar from "@/components/TestPassing/NavBar.vue";
import UserTestDao from "@/service/UserTestDao";
import moment from 'moment';

export default {
  name: "AllTestsResult",
  components: {TestResultItem, NavBar},
  data() {
    return {
      allTestsPage: process.env.VUE_APP_MAIN_PAGE,
      userTests: []
    }
  },
  created() {
    const userId = this.$route.query.userId;
    this.fetchUserTestsData(userId);
  },
  methods: {
    async fetchUserTestsData(userId) {
      const response = await UserTestDao.getUserTests(userId);
      this.userTests = response.data;
      this.changeDateFormat();
    },
    changeDateFormat() {
      this.userTests.forEach(ut => {
        ut.startingTime = moment(ut.startingTime).format('HH:mm-DD.MM.YYYY')
        ut.endingTime = moment(ut.endingTime).format('HH:mm-DD.MM.YYYY')
      })
    }
  },
}
</script>

<template>
  <NavBar :link-to-all-tests="allTestsPage"/>

  <div id="all-tests">
    <div id="tests">
      <TestResultItem v-for="userTest in userTests"
                      :key="userTest.testId"
                      :name="userTest.test.name"
                      :subject="userTest.test.subject"
                      :difficulty="userTest.test.difficulty"
                      :startingTime="userTest.startingTime"
                      :endingTime="userTest.status == 'completed' ? userTest.endingTime : 'not completed'"
                      :result="userTest.result"
      />
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