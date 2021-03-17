const fs = require("fs");
const data = {
  data: "abc",
  stuff: 10,
  more_data: "1 2 3 4 3 2 1",
};
const jsonString = JSON.stringify(data);
let send = document.querySelector(".send");

send.addEventListener("click", () => {
  fs.appendFile("./data.json", jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
      console.log(data.stuff);
    }
  });
});
