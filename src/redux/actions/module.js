import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_MODULE, UPDATE_MODULE, DELETE_MODULE, GET_ALL_MODULE, DEACTIVATED_MODULE} from "../type";

export const getAllModuleAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/modules`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_MODULE,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_MODULE,
                    payload: error,
                });
            });
    };
};

export const addModuleAction = (addModuleData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/modules`, addModuleData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_MODULE,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllModuleAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_MODULE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateModuleAction = (updateModuleData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/modules/${updateModuleData._id}`, updateModuleData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_MODULE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllModuleAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_MODULE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteModuleAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/modules/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_MODULE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllModuleAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_MODULE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deactivatedModule = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/modules/deactivated`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DEACTIVATED_MODULE,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllModuleAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DEACTIVATED_MODULE,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })

            });
    };
};
