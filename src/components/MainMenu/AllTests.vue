<script>
import TestItem from "@/components/MainMenu/TestItem.vue";
import axios from "axios";

export default {
  name: "AllTests",
  components: {
    TestItem
  },
  data() {
    return {
      testsData: []
    };
  },
  created() {
    this.fetchTestsData();
  },
  methods: {
    async fetchTestsData() {
      try {
        const response = await axios.get("https://localhost:7003/api/tests");
        this.testsData = response.data;
        console.log(this.testsData);
      } catch (error) {
        console.error("Error fetching tests:", error.toString());
      }
    },
    sortBy(criteria) {
      this.testsData.sort((a, b) => {
        if (criteria === 'name') {
          return a.name.localeCompare(b.name);
        } else if (criteria === 'difficulty') {
          const difficultyOrder = { 'easy': 1, 'medium': 2, 'hard': 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        } else if (criteria === 'numOfQuestions') {
          return a.questions.length - b.questions.length;
        } else if (criteria === 'duration') {
          return a.duration - b.duration;
        }
      });
    },
  }
}
</script>

<template>
  <div id="all-tests">
    <div id="sort-bar" class="card">
      <div class="sort">
        <span>Sort by: </span>
        <a @click="sortBy('name')" class="sort" title="Sort by name">Name ⇵</a>
        <a @click="sortBy('difficulty')" class="sort" title="Sort by difficulty">Difficulty ⇵</a>
        <a @click="sortBy('duration')" class="sort" title="Sort by duration">Duration ⇵</a>
        <a @click="sortBy('numOfQuestions')" class="sort" title="Sort by number of questions">Number of queries ⇵</a>
      </div>
    </div>

    <div id="tests">
      <TestItem v-for="test in testsData" :key="test.id" v-bind="test"/>
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

#sort-bar {
  display: grid;
  width: 70vw;
  margin-top: 20px;
  margin-left: 15%;
  margin-right: 20%;
  justify-content: center;
  grid-template-columns: 3fr;
}

.sort {
  color: black;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
}

.sort > a {
  font-weight: 430;
  color: black;
  margin: 0 10px 0 10px;
}

.sort > a:hover {
  transition: 500ms;
  text-decoration: none;
  padding-bottom: 5px;
  color: rgb(0, 123, 255);
}

.sort > span {
  margin: 0 10px 0 10px;
}

a:hover {
  cursor: pointer;
}

.card{
  opacity: 94%;
}
</style>