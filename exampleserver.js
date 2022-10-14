const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is krishna!</h1>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>About krishna!!</h1>");
  } else if (req.url == "/b") {
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
