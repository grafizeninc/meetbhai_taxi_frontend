import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import couponReducer from "./reducers/couponReducer";
import faqReducer from "./reducers/faqReducer";
import heroBannerReducer from "./reducers/heroBannerReducer";
import imageUploadReducer from "./reducers/imageUploadReducer";
import itemReducer from "./reducers/itemReducer";
import liveTextReducer from "./reducers/liveTextReducer";
import moduleReducer from "./reducers/moduleReducer";
import notificationReducer from "./reducers/notificationReducer";
import offerBannerReducer from "./reducers/offerBannerReducer";
import orderReducer from "./reducers/orderReducer";
import referalCodeReducer from "./reducers/referalCodeReducer";
import reviewReducer from "./reducers/reviewReducer";
import rolesReducer from "./reducers/rolesReducer";
import statusReducer from "./reducers/statusReducer";
import storeReducer from "./reducers/storeReducer";
import subCategoryReducer from "./reducers/subCategoryReducer";
import taxReducer from "./reducers/taxReducer";
import unitReducer from "./reducers/unitReducer";
import userRolePermissionReducer from "./reducers/userRolePermissionReducer";
// import airPortReducer from "./reducers/airPortReducer";
import cityReducer from "./reducers/cityReducer";
import destinationReducer from "./reducers/destinationReducer";
import localHourlyPackageReducer from "./reducers/localHourlyPackageReducer";
import stateReducer from "./reducers/stateReducer";
import tripReducer from "./reducers/tripReducer";
import airportReducer from "./reducers/airportReducer";

const rootReducer = combineReducers({
  airPortState: airportReducer,
  authState: authReducer,
  rolesState: rolesReducer,
  cityState: cityReducer,
  subCategoryState: subCategoryReducer,
  itemState: itemReducer,
  faqState: faqReducer,
  statusState: statusReducer,
  couponState: couponReducer,
  orderState: orderReducer,
  notificationState: notificationReducer,
  stateState: stateReducer,
  unitState: unitReducer,
  taxState: taxReducer,
  tripState:tripReducer,
  localHourlyPackageState: localHourlyPackageReducer,
  reviweState: reviewReducer,
  storeState: storeReducer,
  moduleState: moduleReducer,
  userRolePermission: userRolePermissionReducer,
  imageUploadState: imageUploadReducer,
  destinationState: destinationReducer,
  heroBannerState:heroBannerReducer,
  offerBannerState:offerBannerReducer,
  liveTextState:liveTextReducer,
  referalCodeState:referalCodeReducer

});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(), applyMiddleware(thunk));

export default store;
