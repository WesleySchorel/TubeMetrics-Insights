// Function to update the timer every second
function updateTimer() {
    var timerElement = document.getElementById('hour-upload-timer');
    var currentCount = parseFloat(timerElement.textContent);
    var increment = 8.33;

    var newCount = currentCount + increment;
    var roundedCount = Math.floor(newCount); 
    timerElement.textContent = roundedCount + ' hours';
}

setInterval(updateTimer, 1000);
