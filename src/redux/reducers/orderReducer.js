import { GET_ALL_ORDER, ADD_ORDER, UPDATE_ORDER, DELETE_ORDER, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllOrder: [],
    addOrder: [],
    updateOrder: [],
    deleteOrder: []
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ORDER:
            return {
                ...state,
                getAllOrder: action.payload

            };
        case ADD_ORDER:
            return {
                ...state,
                addOrder: action.payload
            };
        case UPDATE_ORDER:
            return {
                ...state,
                updateOrder: action.payload
            };
        case DELETE_ORDER:
            return {
                ...state,
                deleteOrder: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default orderReducer;