import { Request,Response } from "express";
import feedbackModel from "../model/feedback.model";


const createFeedback = async (req: Request, res: Response) => {
    try {
        const { name, profession, message } = req.body;
        if (!name || !profession || !message) {
            return res.status(400).json({
                message: "Name, profession, and message are required"
            });
        }
        const newFeedback = await feedbackModel.create({
            name,
            profession,
            message
        });

        
        return res.status(201).json({
            message: "Feedback created successfully",
            data: newFeedback
        });
    } catch (error: any) {
        res.status(500).json({
            message: "Error creating feedback",
            error: error.message
        });
    }
};
