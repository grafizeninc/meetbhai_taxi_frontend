import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_AIRPORT_BOOKING, ADD_LOCAL_BOOKING, UPDATE_BOOKING, UPDATE_LOCAL_BOOKING, DELETE_BOOKING,  DELETE_LOCAL_BOOKING, GET_ALL_BOOKING, GET_VEHICLE_BY_AIRPORT_AND_DESTINATION, GET_ALL_LOCAL_BOOKING, GET_VEHICLE_BY_LOCAL_PACKAGES } from "../type";

export const getAllAirportBookingAction = () => {
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

export const getAllLocalBookingAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/local-airport-bookings`)
            .then((res) => {
                if (res?.status === "success") {
                    dispatch({
                        type: GET_ALL_LOCAL_BOOKING,
                        payload: res.data.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_LOCAL_BOOKING,
                    payload: error,
                });

            });
    };
};
export const getVehicleByLocalPackagesAction = (cityId, packageId) => {
    return (dispatch) => {
        return ApiGet(`/api/v1//local-airport-vehicles?cityId=${cityId}&packageId=${packageId}`)
            .then((res) => {
                if (res?.status === "success") {
                    dispatch({
                        type: GET_VEHICLE_BY_LOCAL_PACKAGES,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_VEHICLE_BY_LOCAL_PACKAGES,
                    payload: error,
                });

            });
    };
};

export const getVehicleByAirportAndDestinationAction = (airportId, destinationId) => {
    return (dispatch) => {
        return ApiGet(`/api/v1/airport-destination-vehicle?destinationId=${destinationId}&airportId=${airportId}`)
            .then((res) => {
                if (res?.status === "success") {
                    dispatch({
                        type: GET_VEHICLE_BY_AIRPORT_AND_DESTINATION,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_VEHICLE_BY_AIRPORT_AND_DESTINATION,
                    payload: error,
                });

            });
    };
};

export const addAirportBookingAction = (addAirportBookingData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/booking`, addAirportBookingData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_AIRPORT_BOOKING,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllAirportBookingAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_AIRPORT_BOOKING,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const addLocalBookingAction = (addLocalBookingData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/local-airport-booking`, addLocalBookingData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_LOCAL_BOOKING,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllLocalBookingAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_LOCAL_BOOKING,
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
export const updateLocalBookingAction = (updateLocalData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/local-airport-booking/${updateLocalData._id}`, updateLocalData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_LOCAL_BOOKING,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllLocalBookingAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_LOCAL_BOOKING,
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

export const deleteLocalBookingAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/local-airport-booking/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_LOCAL_BOOKING,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllLocalBookingAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_LOCAL_BOOKING,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })

            });
    };
};
