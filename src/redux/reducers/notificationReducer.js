import { GET_ALL_NOTIFICATION, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllNotification: [],
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_NOTIFICATION:
            return {
                ...state,
                getAllNotification: action.payload
            };
        case RESET_GLOBAL_STATE:
            return initialState;

        default:
            return state;
    }
}

export default notificationReducer;
