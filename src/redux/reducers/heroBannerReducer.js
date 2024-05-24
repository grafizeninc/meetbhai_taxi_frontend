import { ADD_HERO_BANNER, UPDATE_HERO_BANNER, DELETE_HERO_BANNER, GET_ALL_HERO_BANNER, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllHeroBanner: [],
    addHeroBanner: [],
    updateHeroBanner: [],
    deleteHeroBanner: [],
};

const heroBannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_HERO_BANNER:
            return {
                ...state,
                getAllHeroBanner: action.payload

            };
        case ADD_HERO_BANNER:
            return {
                ...state,
                addHeroBanner: action.payload
            };
        case UPDATE_HERO_BANNER:
            return {
                ...state,
                updateHeroBanner: action.payload
            };
        case DELETE_HERO_BANNER:
            return {
                ...state,
                deleteHeroBanner: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default heroBannerReducer;