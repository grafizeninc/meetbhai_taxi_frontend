import { toast } from "react-toastify";
import { GET_ALL_STATUS, ADD_STATUS, UPDATE_STATUS, DELETE_STATUS, RECOVER_UNIT, GET_DEACTIVE_UNIT, } from "../type";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";

export const getAllStatusAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/status/get-status`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: GET_ALL_STATUS,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_STATUS,
          payload: error,
        });
      });
  };
};

export const addStatusAction = (addStatusData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/status/add-status`, addStatusData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_STATUS,
            payload: res.data,
          });
          toast.success(res?.data?.message, { autoClose: 1000 })
          dispatch(getAllStatusAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_STATUS,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const updateStatusAction = (updateStatusData) => {
  return (dispatch) => {
    return ApiPut(`/api/v1/status/update-status/${updateStatusData?._id}`,updateStatusData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: UPDATE_STATUS,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 })
          dispatch(getAllStatusAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_STATUS,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};

export const deleteStatusAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/status/delete-status/${deleteId}`)
      .then((res) => {
        dispatch({
          type: DELETE_STATUS,
          payload: res.data,
        });
        toast.success(res?.message, { autoClose: 1000 })
        dispatch(getAllStatusAction());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_STATUS,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};
