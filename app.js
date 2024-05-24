const express = require("express");
const app = express();
const port = 3000;
const routePosts = require("./Controller/posts");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<h1>Benvenuto nel mio Blog!</h1>`);
});

app.get("/posts", routePosts);

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});
