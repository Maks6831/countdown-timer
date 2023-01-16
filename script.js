const birthDay = '15 March 2023';

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown(){
    const birthDayDate = new Date(birthDay);
    const currentDate = new Date();

    const totalSeconds = (birthDayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 26);

    const hours = Math.floor(totalSeconds / 36000 % 24);

    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    console.log(days, hours,  minutes, seconds)
    //console.log(totalSeconds )

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


setInterval(countdown, 1000)