import express from "express";
import cors from "cors";
import router from "./app/router";
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application route
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("TITAN FITNESS'S APP IS RUNNING");
});

export default app;
