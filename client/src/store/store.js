import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import beerReducer from './reducers/beerReducer';
import modalReducer from './reducers/modalReducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    main: beerReducer,
})

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
);

export default store;
