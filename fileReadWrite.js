const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

//synchronous
const f1 = readFileSync("./subfolder/first.txt", "utf8");
writeFileSync("./subfolder/second.txt", `Message from first.txt: ${f1}`);
console.log(f1);

//async
readFile("./subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("async read: ", result);
  writeFile(
    "./subfolder/second.txt",
    "Async write: " + result,
    (error, success) => {
      if (error) {
        console.log(err);
        return;
      }
      console.log(success);
    }
  );
});
