<template>
    <div class="countdown">
      <h1>Countdown</h1>
      <div class="timer">
        <div class="time">
          <span>{{ days }}</span> Days
        </div>
        <div class="time">
          <span>{{ hours }}</span> Hours
        </div>
        <div class="time">
          <span>{{ minutes }}</span> Minutes
        </div>
        <div class="time">
          <span>{{ seconds }}</span> Seconds
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        targetDate: new Date("2025-01-30T00:00:00"), //set date
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    },
    created() {
      this.startCountdown();
    },
    methods: {
      startCountdown() {
        setInterval(this.updateCountdown, 1000);
      },
      updateCountdown() {
        const now = new Date();
        const difference = this.targetDate - now;
  
        if (difference <= 0) {
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          return;
        }
  
        this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      },
    },
  };
  </script>
  
  <style scoped>
  .countdown { 
    height:fit-content;   
    padding: 5%;
    align-content: center;
    background-color: #DCDCF2;
    text-align: center; 
    font-family: "Ysabeau Infant";
    font-weight: bolder;
    color: #000000;
    font-size: 50px;
    margin-top: 2%;
  }
  
  .timer {
    display: flex;
    justify-content: center;
    gap:70px;
  }
  
  .time {
    font-size: 30px;
  }
  
  .time span {  
    font-family:"Ysabeau Infant"; 
    font-size: 180px;
    color:white;
  }
  </style>
  