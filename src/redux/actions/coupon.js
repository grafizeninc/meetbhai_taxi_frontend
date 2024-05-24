import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { GET_ALL_COUPON, ADD_COUPON, UPDATE_COUPON, DELETE_COUPON, GET_ACTIVE_COUPON } from "../type";

export const getAllCouponAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/coupon/get/all`)
      .then((res) => {
        dispatch({
          type: GET_ALL_COUPON,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_COUPON,
          payload: error,
        });
      });
  };
};

export const getActiveCouponAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/coupon/get-active-coupon`)
      .then((res) => {
        dispatch({
          type: GET_ACTIVE_COUPON,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ACTIVE_COUPON,
          payload: error,
        });
      });
  };
}; 

export const addCouponAction = (addCouponData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/coupon/create-coupon`, addCouponData)
      .then((res) => {
        dispatch({
          type: ADD_COUPON,
          payload: res.data,
        });
        toast.success(res?.data?.message, { autoClose: 1000 })
        dispatch(getAllCouponAction());
      })
      .catch((error) => {
        dispatch({
          type: ADD_COUPON,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const updateCouponAction = (updateCounterData) => {
  return (dispatch) => {
    return ApiPut(`/api/v1/coupon/update-coupon/${updateCounterData?._id}`, updateCounterData)
      .then((res) => {
        dispatch({
          type: UPDATE_COUPON,
          payload: res.data,
        });
        toast.success(res?.message, { autoClose: 1000 })
        dispatch(getAllCouponAction());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_COUPON,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const deleteCouponAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/coupon/delete-coupon/${deleteId}`)
      .then((res) => {
        dispatch({
          type: DELETE_COUPON,
          // payload: res.data
          payload: deleteId,
        });
        toast.success(res?.message, { autoClose: 1000 })
        dispatch(getAllCouponAction());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_COUPON,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};