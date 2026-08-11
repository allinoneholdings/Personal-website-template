import { Request, Response } from "express";
import contentModel from "../model/content.model";

export const createContent = async (req: Request, res: Response) => {
  try {
    const { title, name, image } = req.body;

    let img = {
      url: "",
      fileId: "",
    };
    if (req.file) {
            try {
                const uploaded = await uploadImage(req.file);
                if (uploaded) {
                    image.url = uploaded.url;
                    image.fileId = uploaded.fileId;
                }
            } catch (uploadError) {
                console.error('Image upload failed:', uploadError);
            }
        }

    const savedContent = await contentModel.create({
      title,
      name,
      img
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

export const getTheContent = async (req: Request, res: Response) => {
  try {
    const contents = await contentModel.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching content", error });
  }
};