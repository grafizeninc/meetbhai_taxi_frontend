import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { GET_ALL_LOCAL_PACKAGES, } from "../type";

export const getAllLocalPackagesAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/localPackagesPackages`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_LOCAL_PACKAGES,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_LOCAL_PACKAGES,
                    payload: error,
                });
            });
    };
}; 