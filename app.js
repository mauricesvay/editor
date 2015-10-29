import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './js/components/App';
import AppReducers from './js/reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

// let store = createStore(AppReducers);
let store = createStoreWithMiddleware(AppReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.app')
);

