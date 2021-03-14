const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;

export const sendSms = (phone, message) => {
  const client = require('twilio')(accountSid, authToken);
  return client.messages
    .create({
       body: message,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: phone
     })
}
