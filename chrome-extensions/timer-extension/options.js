const nameInput = document.getElementById("name-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", () => {
  const name = nameInput.value
  /**
   * Setting Storage
   */
  chrome.storage.sync.set({
    name
  }, () => {
    console.log(`Name is set to ${name}`)
  })
})

chrome.storage.sync.get(["name"], (response) => {
  console.log(response)
})