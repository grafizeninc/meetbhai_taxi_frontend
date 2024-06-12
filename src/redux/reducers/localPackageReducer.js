import { GET_ALL_LOCAL_PACKAGES, RESET_GLOBAL_STATE } from '../type';

const initialState = {
    getAllLocalPackages: [], 
};

const localPackageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_LOCAL_PACKAGES:
            return {
                ...state,
                getAllLocalPackages: action.payload
            }; 

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default localPackageReducer;