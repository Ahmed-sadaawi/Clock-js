
setInterval(function () {
    let clockElement = document.querySelector('.clock');
    let nowDate = new Date();
    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours < 9) {
        hours = "0" + hours;
    }

    let innerClock = `${hours} : ${minutes} : ${seconds < 10 ? seconds = "0" + seconds : seconds = seconds}`;
    clockElement.innerHTML = innerClock;
}, 1000);

