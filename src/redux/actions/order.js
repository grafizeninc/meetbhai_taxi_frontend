import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from '../../helper/axios';
import { ADD_ORDER, GET_ALL_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../type';

export const getAllOrderAction = () => {

    return dispatch => {
        return ApiGet(`/api/v1/order/get-order`).then((res) => {
            if (res?.status === 200) {
                dispatch({
                    type: GET_ALL_ORDER,
                    payload: res.data
                })
            }
        }).catch((error) => {
            dispatch({
                type: GET_ALL_ORDER,
                payload: error
            })
        })
    }
}

export const addOrderAction = (addOrderData) => {

    return dispatch => {
        return ApiPost(`/api/v1/order/create-order`, addOrderData).then((res) => {
            if (res?.status === 200) {
                dispatch({
                    type: ADD_ORDER,
                    payload: res.data
                })
                toast.success(res?.data?.message, { autoClose: 1000 })
            }
        }).catch((error) => {
            dispatch({
                type: ADD_ORDER,
                payload: error
            })
            toast.error(error?.response?.data?.message, { autoClose: 1000 })
        })
    }
}

export const updateOrderAction = (updateOrderData, id) => {

    return dispatch => {
        return ApiPut(`/api/v1/order/update-order/${id}`, updateOrderData).then((res) => {
            if (res?.status === 200) {
                dispatch({
                    type: UPDATE_ORDER,
                    payload: res.data
                })
                toast.success(res?.message, { autoClose: 1000 })
                dispatch(getAllOrderAction())
            }
        }).catch((error) => {
            dispatch({
                type: UPDATE_ORDER,
                payload: error
            })
            toast.error(error?.response?.data?.message, { autoClose: 1000 })
        })
    }
}

export const deleteOrderAction = (deleteId) => {

    return dispatch => {
        return ApiDelete(`/api/v1/order/delete-order/${deleteId}`).then((res) => {
            dispatch({
                type: DELETE_ORDER,
                payload: deleteId
            })
            toast.success(res?.message, { autoClose: 1000 })
            dispatch(getAllOrderAction())

        }).catch((error) => {
            dispatch({
                type: DELETE_ORDER,
                payload: error
            })
            toast.error(error?.response?.data?.message, { autoClose: 1000 })
        })
    }
}