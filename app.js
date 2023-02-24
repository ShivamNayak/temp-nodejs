const amount = 12;
const os = require("os");
const path = require("path");

const filepath = path.join("content", "subfolder", "/dest/");
console.log(path.basename(filepath));
console.log(__dirname);
console.log(path.resolve(__dirname, "content", "subfolder"));
