import {Request, Response} from "express";
import industryExModel from "../model/industryEx.model";

export const createIndustryEx = async (req: Request, res: Response) => {
    try {
        const { y_of_ex, org_imp,sp_Eng,lead_coutched } = req.body;

        if (!y_of_ex || !org_imp || !sp_Eng || !lead_coutched) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newContent = await industryExModel.create({
            y_of_ex,
            org_imp,
            sp_Eng,
            lead_coutched
        });

        return res.status(201).json({
            message: "Content created successfully",
            data: newContent
        });

    } catch (error: any) {
        res.status(500).json({
            message: "Error creating content",
            error: error.message
        });
    }
}

        