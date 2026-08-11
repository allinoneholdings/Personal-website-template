import { Request, Response } from "express";
import contentModel from "../model/content.model";

export const createContent = async (req: Request, res: Response) => {
  try {
    const { title, name } = req.body;

    const savedContent = await contentModel.create({
      title,
      name,
    });

    res.status(201).json({
      message: "Content created successfully",
      savedContent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating content",
      error,
    });
  }
};

const getAllContent = async (req: Request, res: Response) => {
  try {
    const contents = await contentModel.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching content", error });
  }
};