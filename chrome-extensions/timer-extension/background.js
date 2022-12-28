
chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener(() => {
  chrome.storage.local.get(["timer"], (response) => {
    const time = response.timer ?? 0
    const timer = time + 1
    chrome.storage.local.set({
      timer
    })
    chrome.action.setBadgeText({
      text: `${timer}`
    })
    chrome.storage.sync.get(["notificationTime"], (response) => {
      const notificationTime = response.notificationTime ?? 1000
      if (time % notificationTime === 0) {
        this.registration.showNotification("Chrome Timer Extension", {
          body: "10 second has passed",
          icon: "icon.png"
        })
      }
    });
  })
})