import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_TAX, UPDATE_TAX, DELETE_TAX, GET_ALL_TAX, } from "../type";

export const getAllTaxAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/tax/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_TAX,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_TAX,
                    payload: error,
                });
            });
    };
};

export const addTaxAction = (addTaxData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/tax`, addTaxData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_TAX,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllTaxAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TAX,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateTaxAction = (updateTaxData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/tax/update-tax/${updateTaxData._id}`, updateTaxData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_TAX,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllTaxAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_TAX,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteTaxAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/tax/delete-tax/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_TAX,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllTaxAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_TAX,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
