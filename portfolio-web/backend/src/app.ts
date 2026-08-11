import express from "express";
import cors from "cors";
import contentRoutes from "./routes/content.router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running"
  });
});

app.use("/api",contentRoutes); 
export default app;