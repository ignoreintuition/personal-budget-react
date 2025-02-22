import express from "express";
import cors from "cors";

import data from "./data.json" assert { type: "json" };
const app = express();
const port = 3001;

app.get("/budget", cors(), (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example port listening on http://localhost:${port}`);
});
