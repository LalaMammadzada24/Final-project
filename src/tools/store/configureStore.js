import {applyMiddleware, compose, createStore} from 'redux'
import { blogReducer } from '../reducer/blogReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(blogReducer,composeEnhancers(applyMiddleware(thunk)));
    return store
}

export default configureStore;
