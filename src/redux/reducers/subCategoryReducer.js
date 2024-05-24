import { ADD_SUBCATEGORY, UPDATE_SUBCATEGORY, DELETE_SUBCATEGORY, GET_ALL_SUBCATEGORY, RESET_GLOBAL_STATE } from '../type';


const initialState = {
    getAllSubCategory: [],
    addSubCategory: [],
    updateSubCategory: [],
    deleteSubCategory: [],
};

const subCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SUBCATEGORY:
            return {
                ...state,
                getAllSubCategory: action.payload

            };
        case ADD_SUBCATEGORY:
            return {
                ...state,
                addSubCategory: action.payload
            };
        case UPDATE_SUBCATEGORY:
            return {
                ...state,
                updateSubCategory: action.payload
            };
        case DELETE_SUBCATEGORY:
            return {
                ...state,
                deleteSubCategory: action.payload
            };

        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
}

export default subCategoryReducer;