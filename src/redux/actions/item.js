import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { GET_ALL_ITEM, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../type";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAllItemAction = (getData) => {
  return (dispatch) => {
    return ApiGet(`/api/v1/item/get/all`
      // /api/v1/item/get/all?category_id=&type=all`
    )
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: GET_ALL_ITEM,
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ITEM,
          payload: error,
        });
      });
  };
};

export const addItemAction = (addItemData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/item/create-item`, addItemData)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: ADD_ITEM,
            payload: res.data,
          });
          toast.success(res.data.message, { autoClose: 1000 });
          dispatch(getAllItemAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_ITEM,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })


      });
  };
};

export const updateItemAction = (updateItemData) => {
  return (dispatch) => {
    return ApiPut(
      `/api/v1/item/update-item/${updateItemData?._id}`, updateItemData
    )
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: UPDATE_ITEM,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 });
          dispatch(getAllItemAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: error?.message,
        });
        toast.error("Something went wrong")
      });
  };
};

export const deleteItemAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/item/delete-item/${deleteId}`)
      .then((res) => {
        if (res?.status === 200) {
          dispatch({
            type: DELETE_ITEM,
            payload: res.data,
          });
          toast.success(res?.message, { autoClose: 1000 })
          dispatch(getAllItemAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ITEM,
          payload: error,
        });
        toast.error(error?.response?.data?.message, { autoClose: 1000 })
      });
  };
};
