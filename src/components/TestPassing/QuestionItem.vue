<script>
export default {
  name: "QuestionItem",
  props: [
      "testName", "questionText"
  ]
}
</script>

<template>
  <div class="question-item">
    <div class="card">
      <h5 class="card-header">{{ testName }}</h5>
      <div class="card-body"><h6 class="card-title">Question </h6>
        <h4 class="card-text">{{ questionText }}</h4>
        <br>
        <form method="post" action="#">
          <div id="radio-btn-group">
            <input type="radio" id="0" name="answer0" value="всесвітній">
            <label for="0">всесвітній</label><br>

            <input type="radio" id="1" name="answer0" value="поясний">
            <label for="1">поясний</label><br>

            <input type="radio" id="2" name="answer0" value="місцевий">
            <label for="2">місцевий</label><br>

            <input type="radio" id="3" name="answer0" value="літній">
            <label for="3">літній</label><br>
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
</style>