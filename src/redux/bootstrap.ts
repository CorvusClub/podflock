import createSagaMiddleware from "redux-saga";
import { StoreEnhancer, applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "remote-redux-devtools";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { history } from "@navigation/history";

const composeEnhancers = composeWithDevTools({
    name: "podflock",
    realtime: true,
    hostname: "localhost",
    port: 8000,
});

export function bootstrap() {
    let middleware: StoreEnhancer = applyMiddleware(thunk, routerMiddleware(history));

    if (__DEV__) {
        middleware = composeEnhancers(middleware);
    }

    const store = createStore(rootReducer, middleware);

    return store;
}
