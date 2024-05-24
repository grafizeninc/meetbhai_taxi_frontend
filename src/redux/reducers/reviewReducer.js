import { ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW, GET_ALL_REVIEW,APPROVE_REVIEW,  RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllReview: [],
    addReview: [],
    updateReview: [],
    approveReview: [],
    deleteReview: [],
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REVIEW:
            return {
                ...state,
                getAllReview: action.payload

            };
        case ADD_REVIEW:
            return {
                ...state,
                addReview: action.payload
            };
        case UPDATE_REVIEW:
            return {
                ...state,
                updateReview: action.payload
            };
        case APPROVE_REVIEW:
            return {
                ...state,
                approveReview: action.payload
            };
        case DELETE_REVIEW:
            return {
                ...state,
                deleteReview: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default reviewReducer;