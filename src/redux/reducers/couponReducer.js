import { GET_ALL_COUPON, GET_ACTIVE_COUPON, ADD_COUPON, UPDATE_COUPON, DELETE_COUPON, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllCoupon: [],
     getActiveCoupon: [],
    addCoupon: [],
    updateCoupon: [],
    deleteCoupon: [],
};

const couponReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUPON:
            return {
                ...state,
                getAllCoupon: action.payload
            };
             case GET_ACTIVE_COUPON:
            return {
                ...state,
                getActiveCoupon: action.payload
            };
        case ADD_COUPON:
            return {
                ...state,
                addCoupon: action.payload
            };
        case UPDATE_COUPON:
            return {
                ...state,
                updateCoupon: action.payload
            };

        case DELETE_COUPON:
            return {
                ...state,
                deleteCoupon: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default couponReducer;