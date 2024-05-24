import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW, APPROVE_REVIEW, GET_ALL_REVIEW, } from "../type";

export const getAllReviewAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/review/get-review`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_REVIEW,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_REVIEW,
                    payload: error,
                });
            });
    };
};

export const addReviewAction = (addReviewData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/review/add-review`, addReviewData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_REVIEW,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllReviewAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_REVIEW,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateReviewAction = (updateReviewData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/review/update-review/${updateReviewData.id}`, updateReviewData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_REVIEW,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllReviewAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_REVIEW,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const approveReviewAction = (approveReviewData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/review/approve-review/${approveReviewData.id}`, approveReviewData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: APPROVE_REVIEW,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllReviewAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: APPROVE_REVIEW,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteReviewAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/review/delete-review/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_REVIEW,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllReviewAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_REVIEW,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
