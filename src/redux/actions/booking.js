import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_BOOKING, UPDATE_BOOKING, DELETE_BOOKING, GET_ALL_BOOKING } from "../type";

export const getAllBookingAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/bookings`)
            .then((res) => {
                if (res?.status === "success") {
                    dispatch({
                        type: GET_ALL_BOOKING,
                        payload: res.data.data,
                    }); 
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_BOOKING,
                    payload: error,
                });

            });
    };
};

export const addBookingAction = (addBookingData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/booking`, addBookingData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_BOOKING,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllBookingAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_BOOKING,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateBookingAction = (updateCityData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/booking/${updateCityData._id}`, updateCityData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_BOOKING,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllBookingAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_BOOKING,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })

            });
    };
};

export const deleteBookingAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/booking/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_BOOKING,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllBookingAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_BOOKING,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })

            });
    };
};