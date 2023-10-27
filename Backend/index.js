const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/register", (req, res) => {
  let { user, pass } = req.query;
  res.send(`This is GET Request,Welcome ${user}`);
});

app.post("/register", (req, res) => {
  let { user, pas } = req.body;
  res.send(`This is POST Request , welcome ${user}`);
});
let port = 5050;
app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});
