const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("TEsting the website");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
