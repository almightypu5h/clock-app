let stopwatch;
let sSeconds = 0;
let sMinutes = 0;
let sHours = 0;

function sdisplayTime() {
  const sdisplay = document.getElementById('sDisplay');
  sdisplay.textContent = `${String(sHours).padStart(2, '0')}:${String(sMinutes).padStart(2, '0')}:${String(sSeconds).padStart(2, '0')}`;
}

function sstartStopwatch() {
  stopwatch = setInterval(function () {
    sSeconds++;
    if (sSeconds === 60) {
      sSeconds = 0;
      sMinutes++;
      if (sMinutes === 60) {
        sMinutes = 0;
        sHours++;
      }
    }
    sdisplayTime();
  }, 1000);
}

function sstopStopwatch() {
  clearInterval(stopwatch);
}

function sresetStopwatch() {
  clearInterval(stopwatch);
  sSeconds = 0;
  sMinutes = 0;
  sHours = 0;
  sdisplayTime();
}

document.getElementById('sbtnn1').addEventListener('click', sstartStopwatch);
document.getElementById('sbtnn2').addEventListener('click', sstopStopwatch);
document.getElementById('sbtnn3').addEventListener('click', sresetStopwatch);
