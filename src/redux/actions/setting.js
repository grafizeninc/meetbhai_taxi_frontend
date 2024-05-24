import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import {
  ADD_SETTING,
  UPDATE_SETTING,
  DELETE_SETTING,
  GET_ALL_SETTING,
} from "../type";

export const getAllSettingAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/setting/get/all`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: GET_ALL_SETTING,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_SETTING,
          payload: error,
        });
      });
  };
};

export const addSettingAction = (addSettingData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/setting/add-setting`, addSettingData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_SETTING,
            payload: res.data,
          });
          toast.success(res?.data?.message, { autoClose: 1000 })
          dispatch(getAllSettingAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_SETTING,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const updateSettingAction = (updateSettingData) => {
  return (dispatch) => {
    return ApiPut(
      `/api/v1/setting/update-setting/${updateSettingData._id}`,
      updateSettingData
    )
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: UPDATE_SETTING,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 })
          dispatch(getAllSettingAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_SETTING,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const deleteSettingAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/setting/delete-setting/${deleteId}`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: DELETE_SETTING,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 })
          dispatch(getAllSettingAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_SETTING,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};
