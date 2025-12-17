function delayedReminder(message, delay) {
  // Return a promise
  return new Promise((resolve) => {
    // Use setTimeout to log the message after the specified delay
    setTimeout(() => {
      console.log(message);
      // Resolve the promise once the message is logged
      resolve();
    }, delay);
  });
}

module.exports = { delayedReminder };
