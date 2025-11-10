import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Test API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello From gcesgirlstech" });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
