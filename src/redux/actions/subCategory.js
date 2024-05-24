import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_SUBCATEGORY, UPDATE_SUBCATEGORY, DELETE_SUBCATEGORY, GET_ALL_SUBCATEGORY, } from "../type";

export const getAllSubCategoryAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/subcategory/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_SUBCATEGORY,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_SUBCATEGORY,
                    payload: error,
                });
            });
    };
};

export const addSubCategoryAction = (addSubCategoryData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/subcategory`, addSubCategoryData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_SUBCATEGORY,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllSubCategoryAction());
                }
            })
            .catch((error) => {
                console.log("error", error);
                dispatch({
                    type: ADD_SUBCATEGORY,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateSubCategoryAction = (updateSubCategoryData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/subcategory/update-subcategory/${updateSubCategoryData._id}`, updateSubCategoryData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_SUBCATEGORY,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllSubCategoryAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_SUBCATEGORY,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteSubCategoryAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/subcategory/delete/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_SUBCATEGORY,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllSubCategoryAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_SUBCATEGORY,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

