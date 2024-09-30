import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Working");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Running on port ${port}`);
});
