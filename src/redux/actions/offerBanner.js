import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_OFFER_BANNER, UPDATE_OFFER_BANNER, DELETE_OFFER_BANNER, GET_ALL_OFFER_BANNER, } from "../type";

export const getAllOfferBannerAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/offer/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_OFFER_BANNER,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_OFFER_BANNER,
                    payload: error,
                });
            });
    };
};

export const addOfferBannerAction = (addOfferBannerData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/offer`, addOfferBannerData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_OFFER_BANNER,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllOfferBannerAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_OFFER_BANNER,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateOfferBannerAction = (updateOfferBannerData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/offer/update-offer/${updateOfferBannerData._id}`, updateOfferBannerData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_OFFER_BANNER,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllOfferBannerAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_OFFER_BANNER,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteOfferBannerAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/offer/delete-offer/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_OFFER_BANNER,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllOfferBannerAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_OFFER_BANNER,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
