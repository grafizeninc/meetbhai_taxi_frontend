import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_STORE, UPDATE_STORE, DELETE_STORE, GET_ALL_STORE,RECOVER_STORE } from "../type";

export const getAllStoreAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/store/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_STORE,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_STORE,
                    payload: error,
                });
            });
    };
};

export const addStoreAction = (addStoreData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/store/`, addStoreData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_STORE,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllStoreAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_STORE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateStoreAction = (updateStoreData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/store/${updateStoreData._id}`, updateStoreData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_STORE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllStoreAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_STORE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteStoreAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/store/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_STORE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllStoreAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_STORE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const recoverStoreAction = (recoverId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/store/recover/${recoverId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: RECOVER_STORE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllStoreAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: RECOVER_STORE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
