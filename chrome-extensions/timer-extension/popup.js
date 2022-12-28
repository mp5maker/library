const timeElement = document.getElementById('time')
const nameElement = document.getElementById("name")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The time is: ${currentTime}`

/**
 * Setting Badge Text
 */
chrome.action.setBadgeText({
  text: currentTime,
}, () => {
  console.log('Finished setting badge text')
})

/**
 * Getting Storage
 */
chrome.storage.sync.get(["name"], (response) => {
  nameElement.textContent = response.name ? `Your name is: ${response.name}` : ''
});