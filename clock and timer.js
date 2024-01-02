//////////////////////////////Clock////////////////////////////////////////////////
setInterval(() => {
    const time = new Date();
    const hrs = time.getHours().toString().padStart(2, '0');
    const min = time.getMinutes().toString().padStart(2, '0');
    const sec = time.getSeconds().toString().padStart(2, '0');

    document.getElementById('hr').innerHTML = hrs;
    document.getElementById('mn').innerHTML = min;
    document.getElementById('sc').innerHTML = sec;
}, 1000);

/////////////////////////////Timer////////////////////////////////////////////

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function displayTime() {
  const display = document.getElementById('timer-display');
  display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  const inputHours = parseInt(document.getElementById('hours').value) || 0;
  const inputMinutes = parseInt(document.getElementById('minutes').value) || 0;
  const inputSeconds = parseInt(document.getElementById('seconds').value) || 0;

  seconds = inputSeconds;
  minutes = inputMinutes;
  hours = inputHours;

  displayTime();

  timer = setInterval(function () {
    if (seconds === 0 && minutes === 0 && hours === 0) {
      stopTimer();
    } else {
      if (seconds === 0) {
        if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        }
      } else {
        seconds--;
      }
    }

    displayTime();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);


