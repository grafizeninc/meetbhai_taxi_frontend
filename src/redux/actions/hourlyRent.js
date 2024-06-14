import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_HOURLYRENT, UPDATE_HOURLYRENT, DELETE_HOURLYRENT, GET_ALL_HOURLYRENT } from "../type";

export const getAllHourlyRentAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/hourlyRentals`)
            .then((res) => {
                if (res?.status === "success") {
                    dispatch({
                        type: GET_ALL_HOURLYRENT,
                        payload: res.data.data,
                    });  
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_HOURLYRENT,
                    payload: error,
                });

            });
    };
};
 