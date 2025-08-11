import path from "node:path";
import { clerkClient } from "@clerk/express";
import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Machine A up and running");
});

app.get("/send", async (_, res) => {
  const m2mToken = await clerkClient.m2mTokens.create();

  console.log(m2mToken);

  await fetch("http://localhost:3001/receive", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${m2mToken.secret}`,
    },
    body: JSON.stringify({ message: "Hello from Machine A" }),
  })
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.listen(PORT, () => {
  console.log(`Machine A: server is running on port ${PORT}`);
});
