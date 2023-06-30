// Function to update the timer every second
function updateTimer() {
    var timerElement = document.getElementById('video-upload-timer');
    var currentCount = parseFloat(timerElement.textContent);
    var increment = 42.82;

    var newCount = currentCount + increment;
    var roundedCount = Math.floor(newCount); 
    timerElement.textContent = roundedCount + ' videos';
}

setInterval(updateTimer, 1000);
