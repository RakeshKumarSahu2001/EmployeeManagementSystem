import { v2 as cloudinary } from 'cloudinary';
import ApiErrorHandler from '../utils/ApiErrorHandler';
import fs from "fs";

const uploadOnCloudinary=async(loaclFilePath)=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNAME, 
        api_key: process.env.APIKEY, 
        api_secret: process.env.APISECRET
    });

    try {
        const uploadResult = await cloudinary.uploader
        .upload(
            loaclFilePath, {
                resource_type:"auto"
            }
        )
        fs.unlinkSync(loaclFilePath);

        return uploadResult;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        throw new ApiErrorHandler({ 
            statusCode: 500,
             errors: ["Problem occured during file upload"],
            message:"Problem occured during file upload"
         })
    }
}