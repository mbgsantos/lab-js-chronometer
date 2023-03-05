class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60);
    return minutesPassed;
  }

  getSeconds() {
    const secondsPassed = this.currentTime % 60;
    return secondsPassed;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
