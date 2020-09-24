require('dotenv').config()
  const querystring = require("querystring");
  const phone = require("phone");
  const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
  } = process.env;

console.log(TWILIO_ACCOUNT_SID.substring(0, 3))
console.log(TWILIO_AUTH_TOKEN.substring(0, 3))

exports.handler = function (event, context, callback) {

  console.log('insantiating twilio client..')
  const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  
  console.log('parsing event body')
  const data = querystring.parse(event.body);
  console.log(data)
  const phoneNumber = phone(data.mobile);
  const outgoingPhoneNumber = '+15108803280'

  (async() => {
    client.messages
      .create({
        body: `Hi ${data.firstName}, your ballot request was received!`,
        to: phoneNumber,
        from: outgoingPhoneNumber
      })
      .then(message => {
        console.log(`message sent with id: ${message.sid}`)
 
        const response = {
          message: `Response sent to ${phoneNumber}`,
          success: true
        }
 
        callback(null, {
          statusCode: "200",
          body: JSON.stringify(response),
          headers: {
            "Content-Type": "text/json"
          }
        })
      });
    })()
};
