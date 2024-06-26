const express = require("express");
const app = express();
const port = 3000;
const routePosts = require("./Controller/posts");
const posts = require("./postsDb");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Benvenuto nel mio Blog!</h1>`);
});

app.get("/posts", routePosts);

app.post("/posts", (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});
