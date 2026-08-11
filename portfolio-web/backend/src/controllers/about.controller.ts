import {Request, Response} from "express";
import { uploadImage } from "../services/imageKit";
import aboutModel from "../model/about.model";

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

export const createAbout = async (req: Request, res: Response) => {
    try {
        const {  title, description,title_1,dis_1,dis_2,dis_3,dis_4,title_2,title_3,title_4 } = req.body;
        if( !title || !description || !title_1 || !title_2 || !title_3 || !title_4) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const uploaded = await uploadImage(req.file);
        if (!uploaded) {
            return res.status(500).json({
                message: "Image upload failed"
            });
        }
        const newAbout = await aboutModel.create({
            title,
            description,
            title_1,
            dis_1,
            title_2,
            dis_2,
            title_3,
            dis_3,
            title_4,
            dis_4,
            image: uploaded.url
        });
        return res.status(201).json({
            message: "About section created successfully",
            data: newAbout
        });
    } catch (error: any) {
        res.status(500).json({
            message: "Error creating about section",
            error: error.message
        });
    }
}