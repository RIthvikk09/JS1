// const timer = $('.timer');
// const minutesInput = $('#minutes-input');
const startButton = $('form button[type="submit"]');
// const stopButton = $('#stop-btn');
let countdownInterval;

const formatTime = time => {
    return time < 10 ? `0${time}` : time;
};

const startCountdown = () => {
    const minutes = parseInt($('#minutes-input').val());
    console.log(minutes);
    if (isNaN(minutes) || minutes < 1 || minutes > 60) {
        alert('Please enter a number between 1 - 60.');
        return;
    }
}

let seconds = minutes * 60;
countdownInterval = setInterval(() => {
    seconds--;
    const formattedMinutes = formatTime(Math.floor(seconds / 60));
    const formattedSeconds = formatTime(seconds % 60);
    $('.timer').textContent = `$(formattedMinutes):$(formattedSeconds)`;
    if (seconds === 0) {
        clearInterval(countdownInterval);
        alert('Time is Up!');
        $('.timer').textContent = '00:00';
    }
}, 1000);

const stopCountdown = () => {
    clearInterval(countdownInterval);
    $('.timer').textContent = '00:00';
    $('#minutes-input').value = '';
};

startButton.click(event => {
    event.preventDefault();
    startCountdown();
});

$('#stop-btn').click(stopCountdown);