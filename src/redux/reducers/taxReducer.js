import { ADD_TAX, UPDATE_TAX, DELETE_TAX, GET_ALL_TAX, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllTax: [],
    addTax: [],
    updateTax: [],
    deleteTax: [],
};

const taxReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TAX:
            return {
                ...state,
                getAllTax: action.payload

            };
        case ADD_TAX:
            return {
                ...state,
                addTax: action.payload
            };
        case UPDATE_TAX:
            return {
                ...state,
                updateTax: action.payload
            };
        case DELETE_TAX:
            return {
                ...state,
                deleteTax: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default taxReducer;