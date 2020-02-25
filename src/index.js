import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './Store/Reducers/counter';
import resultsReducer from './Store/Reducers/result';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
