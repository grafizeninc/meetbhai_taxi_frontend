import { ADD_LIVE_TEXT, UPDATE_LIVE_TEXT, DELETE_LIVE_TEXT, GET_LIVE_TEXT,RESET_GLOBAL_STATE } from "../type";

const initialState = {
    getLiveText: [],
    addLiveText: [],
    updateLiveText: [],
    deleteLiveText: [],
};

const liveTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIVE_TEXT:
            return {
                ...state,
                getLiveText: action.payload

            };
        case ADD_LIVE_TEXT:
            return {
                ...state,
                addLiveText: action.payload
            };
        case UPDATE_LIVE_TEXT:
            return {
                ...state,
                updateLiveText: action.payload
            };
        case DELETE_LIVE_TEXT:
            return {
                ...state,
                deleteLiveText: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default liveTextReducer;