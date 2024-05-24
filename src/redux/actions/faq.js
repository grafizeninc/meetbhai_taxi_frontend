import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_FAQ, UPDATE_FAQ, DELETE_FAQ, GET_ALL_FAQ, } from "../type";

export const getAllFAQAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/faq/get-faq`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_FAQ,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_FAQ,
                    payload: error,
                });
            });
    };
};

export const addFAQAction = (addFAQData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/faq/create-faq`, addFAQData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_FAQ,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllFAQAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_FAQ,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateFAQAction = (updateFAQData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/faq/update-faq/${updateFAQData._id}`, updateFAQData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_FAQ,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllFAQAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_FAQ,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteFAQAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/faq/delete-faq/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_FAQ,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllFAQAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_FAQ,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
