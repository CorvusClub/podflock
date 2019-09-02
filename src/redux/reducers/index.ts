import { combineReducers } from "redux";
import { subscriptionReducer } from "./subscriptionReducer";
import { navigationReducer } from "./navigationReducer";

const reducerMap = {
    subscriptions: subscriptionReducer,
    router: navigationReducer,
};

export const rootReducer = combineReducers(reducerMap);
