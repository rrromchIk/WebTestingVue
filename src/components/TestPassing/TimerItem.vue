<script>
export default {
  name: "TimerItem",
  props: [
      "millis"
  ],

  data() {
    return {
      timerHours: "00",
      timerMinutes: "14",
      timerSeconds: "42"
    }
  }
}
</script>

<template>
  <div class="timer">
    <div class="timer__items">
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