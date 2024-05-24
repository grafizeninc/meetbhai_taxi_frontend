import { GET_ALL_ROLES, ADD_ROLES, UPDATE_ROLES, DELETE_ROLES, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllRoles: [],
    addRoles: [],
    updateRoles: [],
    deleteRoles: [],
};

const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ROLES:
            return {
                ...state,
                getAllRoles: action.payload

            };
        case ADD_ROLES:
            return {
                ...state,
                addRoles: action.payload
            };
        case UPDATE_ROLES:
            return {
                ...state,
                updateRoles: action.payload
            };
        case DELETE_ROLES:
            return {
                ...state,
                deleteRoles: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default rolesReducer;