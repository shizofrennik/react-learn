import React from 'react'
import ReactDOM from 'react-dom';
import Desk from './components/desk';
import reducer from './reducers';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { storage } from './listeners';

let store = createStore(reducer);
window.store = store;
// store.subscribe(storage());

ReactDOM.render(
    <Provider store={store}>
        <Desk />
    </Provider>,
    document.getElementById('root')
);