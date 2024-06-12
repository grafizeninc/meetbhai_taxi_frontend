import { ADD_HOURLYRENT, UPDATE_HOURLYRENT, DELETE_HOURLYRENT, GET_ALL_HOURLYRENT, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllHourlyRent: [],
    addHourlyRent: [],
    updateHourlyRent: [],
    deleteHourlyRent: [],
};

const hourlyRentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_HOURLYRENT:
            return {
                ...state,
                getAllHourlyRent: action.payload
            };
        case ADD_HOURLYRENT:
            return {
                ...state,
                addHourlyRent: action.payload
            };
        case UPDATE_HOURLYRENT:
            return {
                ...state,
                updateHourlyRent: action.payload
            };
        case DELETE_HOURLYRENT:
            return {
                ...state,
                deleteHourlyRent: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default hourlyRentReducer;