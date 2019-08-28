let args = process.argv.splice(2);
const fs = require("fs");

const request = require("request");

request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, error => {
    if (error) {
      console.log(error);
    }
  });
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});
