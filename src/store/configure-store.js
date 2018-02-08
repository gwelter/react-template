import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import defaultReducer from '../reducers/default';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            defaultReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};