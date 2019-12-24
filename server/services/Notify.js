
const axios = require("axios");
const request = require("request");
class NotifyService {
    
constructor(to ,title,body){
    this.to =to;
    this.title=title;
    this.body=this.body;
}
async send(){

var options = {
  method: "POST",
  url: "https://exp.host/--/api/v2/push/send",
  headers: {
    "Postman-Token": "1260fa8e-4b29-4e3b-7f28-903a952e657a",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json"
  },
  body: {
    to:this.to,
    title: this.title,
    body: this.body,
    android: { priority: "max", vibrate: [0, 250, 250, 250], color: "blue" }
  },
  json: true
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

}
}
module.exports = NotifyService;

