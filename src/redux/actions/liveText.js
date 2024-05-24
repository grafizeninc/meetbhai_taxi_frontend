import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_LIVE_TEXT, UPDATE_LIVE_TEXT, DELETE_LIVE_TEXT, GET_LIVE_TEXT, } from "../type";

export const getLiveTextAction = (getLiveTextData) => {
    return (dispatch) => {
        return ApiGet(`/api/v1/livetext/get/all`, getLiveTextData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_LIVE_TEXT,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIVE_TEXT,
                    payload: error,
                });
            });
    };
};

export const addLiveTextAction = (addLiveTextData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/livetext/create-livetext`, addLiveTextData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_LIVE_TEXT,
                        payload: res.data,
                    });
                    toast.success(res?.data?.message, { autoClose: 1000 })
                    dispatch(getLiveTextAction(addLiveTextData));
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_LIVE_TEXT,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

export const updateLiveTextAction = (updateLiveTextData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/livetext/update-livetext/${updateLiveTextData._id}`, updateLiveTextData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_LIVE_TEXT,
                        payload: res.data,
                    });
                    toast.success(res?.message, { autoClose: 1000 })
                    dispatch(getLiveTextAction(updateLiveTextData));
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_LIVE_TEXT,
                    payload: error,
                });
                toast.error(error?.response?.data?.message, { autoClose: 1000 })
            });
    };
};

// export const deleteLiveTextAction = (deleteId) => {
//     return (dispatch) => {
//         return ApiDelete(`/api/v1/attributes/delete-attributes/${deleteId}`)
//             .then((res) => {
//                 if (res?.status === 200) {
//                     dispatch({
//                         type: DELETE_LIVE_TEXT,
//                         payload: res.data,
//                     });
//                    toast.success(res?.message, { autoClose: 1000 })
//                     dispatch(getallAttributeAction());
//                 }
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: DELETE_LIVE_TEXT,
//                     payload: error,
//                 });
//                toast.error(error?.response?.data?.message, { autoClose: 1000 })
//             });
//     };
// };
