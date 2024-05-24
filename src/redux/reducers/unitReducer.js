import { ADD_UNIT, UPDATE_UNIT, DELETE_UNIT, GET_ALL_UNIT, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllUnit: [],
    addUnit: [],
    updateUnit: [],
    deleteUnit: [],
};

const unitReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_UNIT:
            return {
                ...state,
                getAllUnit: action.payload

            };
        case ADD_UNIT:
            return {
                ...state,
                addUnit: action.payload
            };
        case UPDATE_UNIT:
            return {
                ...state,
                updateUnit: action.payload
            };
        case DELETE_UNIT:
            return {
                ...state,
                deleteUnit: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default unitReducer;