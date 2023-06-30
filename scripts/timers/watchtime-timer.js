// Function to update the timer every second
function updateTimer() {
    var timerElement = document.getElementById('watchtime-timer');
    var currentCount = parseFloat(timerElement.textContent);
    var increment = 11574.07;

    var newCount = currentCount + increment;
    var roundedCount = Math.floor(newCount); 
    timerElement.textContent = roundedCount + ' hours';
}

setInterval(updateTimer, 1000);
