import { ApiGet } from "../../helper/axios";
import { GET_ALL_NOTIFICATION, } from "../type";

export const getAllFAQAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/notification/get-notification`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_NOTIFICATION,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_NOTIFICATION,
                    payload: error,
                });
            });
    };
};