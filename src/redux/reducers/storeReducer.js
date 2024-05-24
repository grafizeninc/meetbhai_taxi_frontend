import {
  ADD_STORE,
  UPDATE_STORE,
  DELETE_STORE,
  GET_ALL_STORE,
  RESET_GLOBAL_STATE,
  RECOVER_STORE,
} from "../type";

const initialState = {
  getAllStore: [],
  addStore: [],
  updateStore: [],
  deleteStore: [],
  recoverStore: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STORE:
      return {
        ...state,
        getAllStore: action.payload,
      };
    case ADD_STORE:
      return {
        ...state,
        addStore: action.payload,
      };
    case UPDATE_STORE:
      return {
        ...state,
        updateStore: action.payload,
      };
    case DELETE_STORE:
      return {
        ...state,
        deleteStore: action.payload,
      };
    case RECOVER_STORE:
      return {
        ...state,
        recoverStore: action.payload,
      };
    case RESET_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default storeReducer;
