
chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer"], (response) => {
    const time = response.timer ?? 0
    const timer = time + 1
    chrome.storage.local.set({
      timer
    })
    chrome.action.setBadgeText({
      text: `${timer}`
    })
  })
})