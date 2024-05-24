import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_USERROLEPERMISSION, UPDATE_USERROLEPERMISSION, DELETE_USERROLEPERMISSION, GET_ALL_USERROLEPERMISSION, DEACTIVATED_USERROLEPERMISSION} from "../type";

export const getAllUserRolePermissionAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/userRolePermission/`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: GET_ALL_USERROLEPERMISSION,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_USERROLEPERMISSION,
                    payload: error,
                });
            });
    };
};

export const addUserRolePermissionAction = (addUserRolePermissionData) => {
    return (dispatch) => {
        return ApiPost(`/api/v1/userRolePermission`, addUserRolePermissionData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: ADD_USERROLEPERMISSION,
                        payload: res.data,
                    });
                    dispatch(getAllUserRolePermissionAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: ADD_USERROLEPERMISSION,
                    payload: error,
                });
            });
    };
};

export const updateUSERROLEPERMISSIONAction = (updateUSERROLEPERMISSIONData) => {
    return (dispatch) => {
        return ApiPut(`/api/v1/userRolePermission`, updateUSERROLEPERMISSIONData)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: UPDATE_USERROLEPERMISSION,
                        payload: res.data,
                    });
                    dispatch(getAllUSERROLEPERMISSIONAction());
                }
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_USERROLEPERMISSION,
                    payload: error,
                });
            });
    };
};