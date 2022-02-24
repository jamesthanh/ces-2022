import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
