import { Request, Response } from "express";
import { uploadImage } from "../services/imageKit";
import contentModel from "../model/content.model";

type UploadedFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination?: string;
  filename?: string;
  path?: string;
  buffer?: Buffer;
  stream?: NodeJS.ReadWriteStream;
};

type RequestWithFile = Request & { file?: UploadedFile };

export const createContent = async (
  req: Request,
  res: Response
) => {
  try {
    const { title, name } = req.body || {};

    if (!title || !name) {
      return res.status(400).json({
        message: "Title and name are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const uploaded = await uploadImage(req.file);

    if (!uploaded) {
      return res.status(500).json({
        message: "Image upload failed",
      });
    }

    const savedContent = await contentModel.create({
      title,
      name,
      img: uploaded.url,
    });

    return res.status(201).json({
      message: "Content created successfully",
      data: savedContent,
    });
  } catch (error) {
    console.error("Error creating content:", error);

    return res.status(500).json({
      message: "Failed to create content",
    });
  }
};

export const getTheContent = async (req: Request, res: Response) => {
  try {
    const contents = await contentModel.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching content", error });
  }
};