import path from "node:path";
import { clerkClient } from "@clerk/express";
import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(express.json());
const PORT = 3001;

app.get("/", (_, res) => {
  res.send("Machine B up and running");
});

app.post("/receive", async (req, res) => {
  // grab the token from the header
  const token = req.headers.authorization?.split(" ")[1];

  // verify the token
  const m2mToken = await clerkClient.m2m.verifyToken({
    token,
  });

  const { message } = req.body;
  res.json({ messageReceived: message, token: m2mToken });
});

app.listen(PORT, () => {
  console.log(`Machine B: server is running on port ${PORT}`);
});
