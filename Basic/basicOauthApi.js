let userName = "cityabsuat";
let passWord = "cityabsuat";
let token = Buffer.from(`${userName}:${passWord}`).toString('base64');

const reqObj = {
    service_id: 4,
    issue_flag: "A"
}

var http = require("http");

var options = {
  "method": "PUT",
  "hostname": "localhost",
  "port": "8787",
  "path": "/api/service/4",
  "headers": {
    "authorization": `Basic ${token}`,
    "content-type": "application/json",
    "cache-control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify(reqObj));
req.end();

