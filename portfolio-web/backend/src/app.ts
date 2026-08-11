import express from "express";
import cors from "cors";
import contentRoutes from "./routes/content.router";
import industryExRoutes from "./routes/industryEx.routes";
import aboutRoutes from "./routes/about.routes";
import expertiseRoutes from "./routes/expertise.route";
import serviceRoutes from "./routes/service.route";
import feedbackRoutes from "./routes/feedback.route";

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
app.use("/api",expertiseRoutes);
app.use("/api",serviceRoutes);
app.use("/api",feedbackRoutes)
export default app;