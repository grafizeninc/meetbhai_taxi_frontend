import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_HERO_BANNER, UPDATE_HERO_BANNER, DELETE_HERO_BANNER, GET_ALL_HERO_BANNER, } from "../type";

export const getAllHeroBannerAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/banner/get/all`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_HERO_BANNER,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_HERO_BANNER,
                    payload: error,
                });
            });
    };
};

export const addHeroBannerAction = (addHeroBannerData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/banner`, addHeroBannerData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_HERO_BANNER,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getAllHeroBannerAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_HERO_BANNER,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateHeroBannerAction = (updateHeroBannerData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/banner/update-banner/${updateHeroBannerData._id}`, updateHeroBannerData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_HERO_BANNER,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllHeroBannerAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_HERO_BANNER,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const deleteHeroBannerAction = (deleteId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/banner/delete-banner/${deleteId}`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: DELETE_HERO_BANNER,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getAllHeroBannerAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_HERO_BANNER,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};
