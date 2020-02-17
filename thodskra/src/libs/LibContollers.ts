import {Request, Response} from "express";

export const errorReportGeneral = async (response: Response, error: Error, status?:Number, text?:String) => {
    if (text === undefined)    {
        if (typeof status == "string") {
            //only text is provided
            text   = status;
            status = 500;
        } else {
            //status is provided, but can be null
            if (status === null)
                status = 500;
            text = "There wasn an error";
        }
    }
        console.error("Error ", error);
        response.status(status).json({message:text});
};

