<script>
export default {
  name: "TimerItem",
  emits: [
      "timeOut"
  ],
  props: [
      "millis"
  ],
  //TODO updating page

  data() {
    return {
      timerHours: "00",
      timerMinutes: "00",
      timerSeconds: "00"
    }
  },
  methods: {
    startTimer() {
      const deadline = new Date().valueOf() + parseInt(this.millis);
      this.countdownTimer(deadline);

      this.timerId = setInterval(() => {
        this.countdownTimer(deadline);
      }, 1000);
    },
    countdownTimer(deadline) {
      const diff = deadline - new Date();

      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      if(hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(this.timerId);
        this.$emit("timeOut")
      }

      this.timerHours = hours < 10 ? "0" + hours : hours;
      this.timerMinutes = minutes < 10 ? "0" + minutes : minutes;
      this.timerSeconds = seconds < 10 ? "0" + seconds : seconds;
    },
  },
  mounted() {
    this.startTimer();
  }
}
</script>

<template>
  <div class="timer">
    <div class="timer__items">
      <a id="endTestButton" href="http://localhost:8080/all-tests" hidden></a>
      <div hidden id="millis">{{ millis }}</div>
      <div class="timer__item timer__hours">{{ timerHours }}</div>
      <div class="timer__item timer__minutes">{{ timerMinutes }}</div>
      <div class="timer__item timer__seconds">{{ timerSeconds }}</div>
    </div>
  </div>
</template>

<style scoped>
.timer__items {
  display: flex;
  font-size: 32px;
  color: white;
}

.timer__item {
  position: relative;
  min-width: 30px;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 15px;
  text-align: center;
}

.timer__item::before {
  content: attr(data-title);
  display: block;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  font-size: 14px;
}

.timer__item:not(:last-child)::after {
  content: ':';
  position: absolute;
  right: -15px;
}
</style>