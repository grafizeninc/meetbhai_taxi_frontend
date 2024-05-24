import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_REFERAL_CODE, UPDATE_REFERAL_CODE, DELETE_REFERAL_CODE, GET_ALL_REFERAL_CODE, } from "../type";

export const getAllReferalCodeAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/referalcode/get-referalcode/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_REFERAL_CODE,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_REFERAL_CODE,
                    payload: error,
                });
            });
    };
};

export const addReferalCodeAction = (addReferalData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/referalcode/add-referalcode`, addReferalData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_REFERAL_CODE,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllReferalCodeAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_REFERAL_CODE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateReferalCodeAction = (updateReferalData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/referalcode/update-referalcode/${updateReferalData._id}`, updateReferalData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_REFERAL_CODE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllReferalCodeAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_REFERAL_CODE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteReferalCodeAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/referalcode/delete-referalcode/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_REFERAL_CODE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllReferalCodeAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_REFERAL_CODE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
