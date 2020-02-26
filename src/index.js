import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './Store/Reducers/counter';
import resultsReducer from './Store/Reducers/result';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer,
});

const logger = store => {
    return next => {
        return action => {
            console.log('Middleware Dispatching', action);
            const result = next(action);
            console.log('Middleware next state', store.getState());
            return result;
        }
    }
};

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
