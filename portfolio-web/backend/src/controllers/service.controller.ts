import { Request,Response } from "express";
import serviceModel from "../model/service.model";

export const createService = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are required"
            });
        }
        const newService = await serviceModel.create({
            title,
            description
        });

        return res.status(201).json({
            message: "Service created successfully",
            data: newService
        });
    } catch (error: any) {
        res.status(500).json({
            message: "Error creating service",
            error: error.message
        });
    }
};
