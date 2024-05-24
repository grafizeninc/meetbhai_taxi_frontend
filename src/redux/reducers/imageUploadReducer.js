import { IMAGE_UPLOAD, MULTIPLE_UPLOAD_IMAGES, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    image: [],
    images: [],

};

const imageUploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGE_UPLOAD:
            return {
                ...state,
                image: action.payload

            };
        case MULTIPLE_UPLOAD_IMAGES:
            return {
                ...state,
                images: [...state.images, ...action.payload],
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default imageUploadReducer;