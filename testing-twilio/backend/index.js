/**
 * Authenticate
 */
const accountSid = "ACb0045fd3da6c5e368207cc8555be4506";
const authToken = "22286686ed190384e776b3a0f607662c";
const client = require("twilio")(accountSid, authToken);

/**
 * Send a Message
 */

const sendMessage = () => {
  client.messages
    .create({
      body: "Hello from twilio-node",
      to: "whatsapp:+8801701789873",
      from: "whatsapp:+12762966130",
    })
    .then((message) => console.log(message.sid));
}

const createANewRecord = () => {
  client.calls
    .create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: "+8801701789873",
      from: "+12762966130",
    })
    .then((call) => console.log(call.sid));
}

const getAnExistingRecord = () => {
  client
    .calls('CA42ed11f93dc08b952027ffbc406d0868')
    .fetch()
    .then(call => console.log(call.to));
}

const iterateThroughRecords = () => {
  client.calls.each(call => console.log(call.direction));
}


console.log(createANewRecord)
console.log(getAnExistingRecord)
console.log(iterateThroughRecords)
sendMessage()