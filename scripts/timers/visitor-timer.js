// Function to update the timer every second
function updateTimer() {
    var timerElement = document.getElementById('visitor-timer');
    var currentCount = parseFloat(timerElement.textContent);
    var increment = 1412.04;

    var newCount = currentCount + increment;
    var roundedCount = Math.floor(newCount); 
    timerElement.textContent = roundedCount + ' visitors';
}

setInterval(updateTimer, 1000);
