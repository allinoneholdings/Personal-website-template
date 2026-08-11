import express from "express";
import cors from "cors";
import contentRoutes from "./routes/content.router";
import industryExRoutes from "./routes/industryEx.routes";
import aboutRoutes from "./routes/about.routes";

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
app.use("/api",industryExRoutes);
app.use("/api",aboutRoutes);
export default app;