import { ADD_MODULE, UPDATE_MODULE, DELETE_MODULE, GET_ALL_MODULE, DEACTIVATED_MODULE, RESET_GLOBAL_STATE} from "../type";

const initialState = {
    getAllModule: [],
    addModule: [],
    updateModule: [],
    deleteModule: [],
    deactivatedModule: [],
};

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MODULE:
            return {
                ...state,
                getAllModule: action.payload

            };
        case ADD_MODULE:
            return {
                ...state,
                addModule: action.payload
            };
        case UPDATE_MODULE:
            return {
                ...state,
                updateModule: action.payload
            };
        case DELETE_MODULE:
            return {
                ...state,
                deleteModule: action.payload
            };

        case DEACTIVATED_MODULE:
            return {
                ...state,
                deactivatedModule: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default moduleReducer;