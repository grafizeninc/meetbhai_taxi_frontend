import axios from "axios";
import { MULTIPLE_UPLOAD_IMAGES } from "../type";
import { BaseURL } from "../../helper/axios";
// export const BaseURL = "http://localhost:9000";

export const imageUploadAction = async (payload) => {
    const config = {
        headers: {
            "content-type": "multipart/form-data",
        },
    };
    try {
        const res = await axios.post(`${BaseURL}/api/v1/imageUpload`, payload, config);
        return res;
    } catch (error) {
        return error;
    }
};
export const multipleUploadImages = (images) => ({
    type: MULTIPLE_UPLOAD_IMAGES,
    payload: images,
  });

