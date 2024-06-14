import { ADD_DESTINATION, UPDATE_DESTINATION, DELETE_DESTINATION, GET_ALL_DESTINATION, GET_DESTINATION_BY_AIRPORT, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllDestination: [],
    getDestinationByAirport: [],
    addDestination: [],
    updateDestination: [],
    deleteDestination: [],
};

const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DESTINATION:
            return {
                ...state,
                getAllDestination: action.payload

            };
        case GET_DESTINATION_BY_AIRPORT:
            return {
                ...state,
                getDestinationByAirport: action.payload
            };
        case ADD_DESTINATION:
            return {
                ...state,
                addDestination: action.payload
            };
        case UPDATE_DESTINATION:
            return {
                ...state,
                updateDestination: action.payload
            };
        case DELETE_DESTINATION:
            return {
                ...state,
                deleteDestination: action.payload
            };
        
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default destinationReducer;