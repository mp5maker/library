
chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener(() => {
  chrome.storage.local.get(["timer", "isRunning"], (response) => {
    const time = response.timer ?? 0
    const isRunning = response.isRunning ?? true
    console.log("🚀 ~ file: background.js:10 ~ chrome.storage.local.get ~ response.isRunning", isRunning)
    if (!isRunning) return
    const timer = time + 1
    chrome.storage.local.set({
      timer,
      isRunning
    })
    chrome.action.setBadgeText({
      text: `${timer}`
    })
    chrome.storage.sync.get(["notificationTime"], (response) => {
      const notificationTime = response.notificationTime ?? 1000
      if (time % notificationTime === 0) {
        this.registration.showNotification("Chrome Timer Extension", {
          body: `${notificationTime} seconds has passed`,
          icon: "icon.png"
        })
      }
    });
  })
})