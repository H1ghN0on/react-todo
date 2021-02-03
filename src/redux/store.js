import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, JSON.parse(localStorage['redux-store']),
composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
})
export default store;