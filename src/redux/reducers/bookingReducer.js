import { ADD_AIRPORT_BOOKING, ADD_LOCAL_BOOKING, UPDATE_BOOKING, UPDATE_LOCAL_BOOKING, DELETE_BOOKING, DELETE_LOCAL_BOOKING, GET_ALL_BOOKING, GET_VEHICLE_BY_AIRPORT_AND_DESTINATION, GET_ALL_LOCAL_BOOKING, GET_VEHICLE_BY_LOCAL_PACKAGES, RESET_GLOBAL_STATE,  } from '../type';

const initialState = {
    getAllBooking: [],
    getAllLocalBooking: [],
    getVehicleByAirportAndDestination: [],
    getVehicleByLocalPackages: [],
    addAirportBooking: [],
    addLocalBooking: [],
    updateBooking: [],
    updateLocalBooking: [],
    deleteBooking: [],
    deleteLocalBooking: [],
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BOOKING:
            return {
                ...state,
                getAllBooking: action.payload

            };
        case GET_ALL_LOCAL_BOOKING:
            return {
                ...state,
                getAllLocalBooking: action.payload

            };
        case GET_VEHICLE_BY_AIRPORT_AND_DESTINATION:
            return {
                ...state,
                getVehicleByAirportAndDestination: action.payload

            };
        case GET_VEHICLE_BY_LOCAL_PACKAGES:
            return {
                ...state,
                getVehicleByLocalPackages: action.payload

            };
        case ADD_AIRPORT_BOOKING:
            return {
                ...state,
                addBooking: action.payload
            };
        case ADD_LOCAL_BOOKING:
            return {
                ...state,
                addLocalBooking: action.payload
            };
        case UPDATE_BOOKING:
            return {
                ...state,
                updateBooking: action.payload
            };
        case UPDATE_LOCAL_BOOKING:
            return {
                ...state,
                updateLocalBooking: action.payload
            };
        case DELETE_BOOKING:
            return {
                ...state,
                deleteBooking: action.payload
            };
        case DELETE_LOCAL_BOOKING:
            return {
                ...state,
                deleteLocalBooking: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default bookingReducer;