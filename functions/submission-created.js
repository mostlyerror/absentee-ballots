require("dotenv").config()
const querystring = require("querystring")
const phone = require("phone")

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env

// console.log(TWILIO_ACCOUNT_SID.substring(0, 3))
// console.log(TWILIO_AUTH_TOKEN.substring(0, 3))

exports.handler = function (event, context, callback) {
  const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

  const selfie = JSON.parse(event.body).payload.data.selfie
  console.log(selfie)

  const data = querystring.parse(event.body)
  const phoneNumber = phone(data.mobile)
  const outgoingPhoneNumber = "+15108803280"

  client.messages
    .create({
      // body: `Hi ${data.firstName}, your ballot request was received!`,
      body: `selfie received: ${selfie !== null}`,
      to: phoneNumber,
      from: outgoingPhoneNumber,
    })
    .then(message => {
      console.log(`message sent with id: ${message.sid}`)

      const response = {
        message: `Response sent to ${phoneNumber}`,
        success: true,
      }

      callback(null, {
        statusCode: "200",
        body: JSON.stringify(response),
        headers: {
          "Content-Type": "text/json",
        },
      })
    })
}
