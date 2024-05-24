import { ADD_STATUS, GET_ALL_STATUS, UPDATE_STATUS, DELETE_STATUS, RESET_GLOBAL_STATE } from "../type";

const initialState = {
    getAllStatus: [],
    addStatus: [],
    updateStatus: [],
    deleteStatus: [],
};

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STATUS:
            return {
                ...state,
                getAllStatus: action.payload
            };
        case ADD_STATUS:
            return {
                ...state,
                addStatus: action.payload
            };
        case UPDATE_STATUS:
            return {
                ...state,
                updateStatus: action.payload
            };
        case DELETE_STATUS:
            return {
                ...state,
                deleteStatus: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;

        default:
            return state;
    }
}

export default statusReducer;