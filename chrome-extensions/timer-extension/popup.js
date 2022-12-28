const nameElement = document.getElementById("name")
const timerElement = document.getElementById("timer");
const timeElement = document.getElementById("time");
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

// Start
startBtn.addEventListener("click", () => {
  console.log("hello");
  chrome.storage.local.set({
    isRunning: true,
  });
});

// Stop
stopBtn.addEventListener("click", () => {
  console.log();
  chrome.storage.local.set({
    isRunning: false,
  });
});

// Reset
stopBtn.addEventListener("reset", () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: true,
  });
});

// Show Name
chrome.storage.sync.get(["name"], (response) => {
  nameElement.textContent = response.name ? `Your name is: ${response.name}` : ''
});

// Update Time
const updateTimeElements = () => {
  chrome.storage.local.get(["timer"], (response) => {
    const time = response.timer ?? 0
    timerElement.textContent = `The timer is at: ${time} seconds`
  })
}
updateTimeElements()
setInterval(updateTimeElements, 1000);

const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The time is: ${currentTime}`