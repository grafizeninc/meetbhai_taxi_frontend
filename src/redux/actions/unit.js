import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_UNIT, UPDATE_UNIT, DELETE_UNIT, GET_ALL_UNIT, } from "../type";

export const getAllUnitAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/unit/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_UNIT,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_UNIT,
                    payload: error,
                });
            });
    };
};

export const addUnitAction = (addUnitData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/unit`, addUnitData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_UNIT,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllUnitAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_UNIT,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateUnitAction = (updateUnitData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/unit/update-unit/${updateUnitData._id}`, updateUnitData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_UNIT,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllUnitAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_UNIT,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteUnitAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/unit/delete-unit/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_UNIT,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllUnitAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_UNIT,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
