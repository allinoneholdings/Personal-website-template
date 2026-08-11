import { Request, Response, NextFunction } from "express";

export const validateContent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, name } = req.body || {};

  // Required validation
  if (!title || !name) {
    return res.status(400).json({
      message: "Title and name are required",
    });
  }

  // Each word must start with a capital letter
  // and the remaining letters must be lowercase.
  const wordPattern = /^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/;

  if (!wordPattern.test(title)) {
    return res.status(400).json({
      message:
        "Title must start with a capital letter and each word must have lowercase remaining letters",
    });
  }

  if (!wordPattern.test(name)) {
    return res.status(400).json({
      message:
        "Name must start with a capital letter and each word must have lowercase remaining letters",
    });
  }

  next();
};