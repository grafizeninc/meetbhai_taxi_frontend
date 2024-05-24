import { ADD_REFERAL_CODE, UPDATE_REFERAL_CODE, DELETE_REFERAL_CODE, GET_ALL_REFERAL_CODE, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllReferal: [],
    addReferal: [],
    updateReferal: [],
    deleteReferal: [],
};

const referalCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REFERAL_CODE:
            return {
                ...state,
                getAllReferal: action.payload

            };
        case ADD_REFERAL_CODE:
            return {
                ...state,
                addReferal: action.payload
            };
        case UPDATE_REFERAL_CODE:
            return {
                ...state,
                updateReferal: action.payload
            };
        case DELETE_REFERAL_CODE:
            return {
                ...state,
                deleteReferal: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default referalCodeReducer;