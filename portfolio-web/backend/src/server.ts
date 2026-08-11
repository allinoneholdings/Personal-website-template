import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { connectDB } from "./config/db";



const PORT = Number(process.env.PORT) || 3000;

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer().catch((error: unknown) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});