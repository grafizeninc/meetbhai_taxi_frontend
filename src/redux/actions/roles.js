import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../helper/axios";
import { ADD_ROLES, UPDATE_ROLES, DELETE_ROLES, GET_ALL_ROLES } from "../type";

export const getAllRolesAction = () => {
  return (dispatch) => {
    return ApiGet(`/api/v1/role/get-role`)
      .then((res) => {
        dispatch({
          type: GET_ALL_ROLES,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ROLES,
          payload: error,
        });
      });
  };
};

export const addRoles = (addRolesData) => {
  return (dispatch) => {
    return ApiPost(`/api/v1/role/add-role`, addRolesData)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: ADD_ROLES,
            payload: res.data,
          });
          dispatch(getAllRolesAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_ROLES,
          payload: error,
        });
      });
  };
};

export const updateRolesAction = (updateRolesData) => {
  return (dispatch) => {
    return ApiPut(`/api/v1/role/update-role/${updateRolesData?._id}`, updateRolesData)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: UPDATE_ROLES,
            payload: res.data,
          });
          dispatch(getAllRolesAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ROLES,
          payload: error,
        });
      });
  };
};

export const deleteRolesAction = (deleteId) => {
  return (dispatch) => {
    return ApiDelete(`/api/v1/role/delete-role/${deleteId}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: DELETE_ROLES,
            payload: res.data,
          });
          dispatch(getAllRolesAction());
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ROLES,
          payload: error,
        });
      });
  };
};
