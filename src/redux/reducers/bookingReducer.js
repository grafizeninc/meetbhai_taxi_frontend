import { ADD_AIRPORT_BOOKING, UPDATE_BOOKING, DELETE_BOOKING, GET_ALL_BOOKING, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllBooking: [],
    addAirportBooking: [],
    updateBooking: [],
    deleteBooking: [],
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BOOKING:
            return {
                ...state,
                getAllBooking: action.payload

            };
        case ADD_AIRPORT_BOOKING:
            return {
                ...state,
                addBooking: action.payload
            };
        case UPDATE_BOOKING:
            return {
                ...state,
                updateBooking: action.payload
            };
        case DELETE_BOOKING:
            return {
                ...state,
                deleteBooking: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default bookingReducer;