const timeElement = document.getElementById('time')
const nameElement = document.getElementById("name")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The time is: ${currentTime}`

/**
 * Getting Storage
 */
chrome.storage.sync.get(["name"], (response) => {
  nameElement.textContent = response.name ? `Your name is: ${response.name}` : ''
});