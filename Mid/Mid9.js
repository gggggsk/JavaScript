function digitalClock(sec) {
    let hours = Math.floor(sec / 3600);
    let min = 0;
    let sum = '';
    let hoursSum = '';
    let minSum = '';
    let secSum = '';
    sec = sec - (hours * 3600);
    if (sec > 59) {
        min = Math.floor(sec / 60);
        sec = sec - (min * 60);
    }
    if (sec >= 60) {
        sec = 0;
        min = min + (sec - 60);
    }

    if (min >= 60) {
        min = 0;
        hours = hours + 1;
    }

    if (hours > 23) {
        hours = hours - 24;
    }
    if (hours < 10) {
        hoursSum = '0' + hours;
    } else hoursSum += +hours;

    if (min < 10) {
        minSum += '0' + min;
    } else minSum += min;
    if (sec < 10) {
        secSum += '0' + sec;
    } else secSum += sec;

    sum = hoursSum + ":" + minSum + ":" + secSum;
    return sum;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));