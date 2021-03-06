import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from "react-modal-hook";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware , compose } from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {watchStoreMovie} from './sagas/saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const store = createStore(allReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchStoreMovie);


ReactDOM.render(
    <Provider store={store} >
    <ModalProvider>
        <App />
        </ModalProvider>
    </Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
