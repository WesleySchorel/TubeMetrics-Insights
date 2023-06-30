// Function to update the timer with a random value between 1 and 5
function updateTimer() {
    var timerElement = document.getElementById('random-timer');
    var randomValue = Math.floor(Math.random() * 5) + 1;
    timerElement.textContent = randomValue + ' videos';
}

// Start the timer
setInterval(updateTimer, 1000);
