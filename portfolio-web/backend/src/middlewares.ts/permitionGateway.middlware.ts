import { Request, Response, NextFunction } from "express";

export const checkExistingData = (model: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const existingData = await model.findOne();

      if (existingData) {
        return res.status(409).json({
          message: "Data already exists. POST request rejected.",
        });
      }

      next();
    } catch (error) {
      console.error("Database check failed:", error);

      return res.status(500).json({
        message: "Database check failed",
      });
    }
  };
};