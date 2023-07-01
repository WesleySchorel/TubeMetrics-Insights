// Function to format the time in a user-readable format
function formatTime(elapsedTime) {
    var weeks = Math.floor(elapsedTime / (7 * 24 * 60 * 60));
    var days = Math.floor((elapsedTime % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
    var hours = Math.floor((elapsedTime % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((elapsedTime % (60 * 60)) / 60);
    var seconds = elapsedTime % 60;

    var formattedTime = '';
    if (weeks > 0) {
        formattedTime += weeks + (weeks === 1 ? ' week ' : ' weeks ');
    }
    if (days > 0) {
        formattedTime += days + (days === 1 ? ' day ' : ' days ');
    }
    if (hours > 0) {
        formattedTime += hours + (hours === 1 ? ' hour ' : ' hours ');
    }
    if (minutes > 0) {
        formattedTime += minutes + (minutes === 1 ? ' minute ' : ' minutes ');
    }
    if (seconds > 0) {
        formattedTime += seconds + (seconds === 1 ? ' second' : ' seconds');
    }

    return formattedTime.trim();
}

// Function to update the timer every second
function updateTimer() {
    var timerElement = document.getElementById('timer');

    var currentTime = new Date();
    var elapsedSeconds = Math.floor((currentTime - startTime) / 1000);

    var formattedTime = formatTime(elapsedSeconds);
    timerElement.textContent = "It has been " + formattedTime;
}

// Start the timer
var startTime = new Date();

// Update the timer every second
setInterval(updateTimer, 1000);
