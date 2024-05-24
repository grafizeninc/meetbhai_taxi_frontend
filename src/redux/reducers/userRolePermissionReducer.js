import { ADD_USERROLEPERMISSION, GET_ALL_USERROLEPERMISSION, UPDATE_USERROLEPERMISSION, RESET_GLOBAL_STATE } from "../type";

const initialState = {
    getAllUserRolePermission: [],
    addUserRolePermission: [],
    updateUserRolePermission: [],
};

const userRolePermissionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERROLEPERMISSION:
            return {
                ...state,
                getAllUserRolePermission: action.payload

            };
        case ADD_USERROLEPERMISSION:
            return {
                ...state,
                addUserRolePermission: action.payload
            };
        case UPDATE_USERROLEPERMISSION:
            return {
                ...state,
                updateUserRolePermission: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default userRolePermissionReducer;