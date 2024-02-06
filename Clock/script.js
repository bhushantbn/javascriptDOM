const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
let interval;

function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}
function startTimer() {
  clearInterval(interval);
  interval = setInterval(showTime, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
