import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = ({ getState }) => {
    return next => action => {
        const returnValue = next(action);
        getState();
        return returnValue;
    };
};

const middleware = composeEnhancers(applyMiddleware(logger, thunk));

export default createStore(reducers, middleware);
