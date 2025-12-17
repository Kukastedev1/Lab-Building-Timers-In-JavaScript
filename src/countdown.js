function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  let remainingTime = startTime;

  // Set up the timer
  const timerId = setInterval(() => {
    console.log(remainingTime);

    // Decrement time
    remainingTime--;

    // Stop the timer when time reaches 0
    if (remainingTime < 0) {
      clearInterval(timerId);
    }
  }, interval);

  // Return the timer ID for validation
  return timerId;
}

module.exports = { countdownTimer };
