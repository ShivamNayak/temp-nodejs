const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("You are now in the about section");
  }
  if (req.url === "/c")
    res.end(`
    <h1>Oops!</h1>
    <p>There is nothing here...</p>
    <a href="/">Back to home</a>
    `);
});
server.listen(5000);
