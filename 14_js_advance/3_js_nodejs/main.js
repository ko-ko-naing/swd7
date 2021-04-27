let fs = require("fs");
fs.writeFile("test.html","created from node js",function () {
    console.log("created")
});