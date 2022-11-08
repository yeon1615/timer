const inpHrs = document.querySelector('.inp-hrs');
const inpMin = document.querySelector('.inp-min');
const inpSec = document.querySelector('.inp-sec');
const btnStart = document.querySelector('.btn-start');
const btnReset = document.querySelector('.btn-reset');

function changeImg() {}

inpHrs.addEventListener('input', changeImg);
inpMin.addEventListener('input', changeImg);
inpSec.addEventListener('input', changeImg);

btnStart.addEventListener('click', function () {
  let hrs = parseInt(inpHrs.value) / 3600;
  let min = parseInt(inpMin.value) / 60;
  let sec = parseInt(inpSec.value);

  let timerSec = setInterval(() => {
    sec -= 1;
    if (sec >= 0 && sec < 10) {
      sec = '0' + sec;
    } else if (sec < 0) {
      return;
    }
    inpSec.value = sec;
  }, 1000);

  let timerMin = setInterval(() => {
    min;
  }, 6000);
});

function stopTimer() {}
