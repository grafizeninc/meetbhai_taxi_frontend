import { ADD_FAQ, UPDATE_FAQ, DELETE_FAQ, GET_ALL_FAQ, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllFAQ: [],
    addFAQ: [],
    updateFAQ: [],
    deleteFAQ: [],
};

const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FAQ:
            return {
                ...state,
                getAllFAQ: action.payload

            };
        case ADD_FAQ:
            return {
                ...state,
                addFAQ: action.payload
            };
        case UPDATE_FAQ:
            return {
                ...state,
                updateFAQ: action.payload
            };
        case DELETE_FAQ:
            return {
                ...state,
                deleteFAQ: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default faqReducer;