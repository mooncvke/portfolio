const http = require("http");

const app = http.createServer((req, res) => {
  res.end("hello world");
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
