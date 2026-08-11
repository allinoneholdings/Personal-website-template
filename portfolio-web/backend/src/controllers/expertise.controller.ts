import {Request, Response} from "express";
import expertiseModel from "../model/expertise.model";

export const createExpertise = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are required"
            });
        }
        const newExpertise = await expertiseModel.create({
            title,
            description
        });

        return res.status(201).json({
            message: "Expertise created successfully",
            data: newExpertise
        });
    } catch (error: any) {
        res.status(500).json({
            message: "Error creating expertise",
            error: error.message
        });
    }
};

