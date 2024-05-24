import { GET_ALL_ITEM, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllItem: [],
    addItem: [],
    updateItem: [],
    deleteItem: [],
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ITEM:
            return {
                ...state,
                getAllItem: action.payload
            };
        case ADD_ITEM:
            return {
                ...state,
                addItem: action.payload
            };
        case UPDATE_ITEM:
            return {
                ...state,
                updateItem: action.payload
            };
        case DELETE_ITEM:
            return {
                ...state,
                deleteItem: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;

        default:
            return state;
    }
}

export default itemReducer;
