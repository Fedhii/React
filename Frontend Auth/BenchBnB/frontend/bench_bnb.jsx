import React from 'react';
import ReactDom from 'react-dom';
import { configureStore } from './store/store';
import { Root } from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preLoadedState = {
          entities: {
            users: { [window.currentUser.id]: window.currentUser }
          },
          session: { id: window.currentUser.id}
        };
        store = configureStore(preloadedState)
    } else {
        store = configureStore()
    }
    
    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    ReactDOM.render(<Root store={store}/>, rootEl);
})