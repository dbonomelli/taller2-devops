import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { productosReducer } from '../reducers/productosReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
   productos:productosReducer,
});

export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));