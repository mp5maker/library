
const nameElement = document.getElementById("name")
chrome.storage.sync.get(["name"], (response) => {
  nameElement.textContent = response.name ? `Your name is: ${response.name}` : ''
});

const timerElement = document.getElementById("timer")
const updateTimeElements = () => {
  chrome.storage.local.get(["timer"], (response) => {
    const time = response.timer ?? 0
    timerElement.textContent = `The timer is at: ${time} seconds`
  })
}
updateTimeElements()
setInterval(updateTimeElements, 1000);

const timeElement = document.getElementById('time')
timeElement.textContent = `The time is: ${currentTime}`
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The time is: ${currentTime}`