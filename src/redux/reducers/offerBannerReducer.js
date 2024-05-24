import { ADD_OFFER_BANNER, UPDATE_OFFER_BANNER, DELETE_OFFER_BANNER, GET_ALL_OFFER_BANNER, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllOfferBanner: [],
    addOfferBanner: [],
    updateOfferBanner: [],
    deleteOfferBanner: [],
};

const offerBannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_OFFER_BANNER:
            return {
                ...state,
                getAllOfferBanner: action.payload

            };
        case ADD_OFFER_BANNER:
            return {
                ...state,
                addOfferBanner: action.payload
            };
        case UPDATE_OFFER_BANNER:
            return {
                ...state,
                updateOfferBanner: action.payload
            };
        case DELETE_OFFER_BANNER:
            return {
                ...state,
                deleteOfferBanner: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default offerBannerReducer;