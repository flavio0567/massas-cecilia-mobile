import { createStore } from 'redux';

import rootReducer from './rootReducer';

const enhancer = __DEV__ ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
