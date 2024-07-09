import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("TITAN FITNESS'S APP IS RUNNING");
});

export default app;
