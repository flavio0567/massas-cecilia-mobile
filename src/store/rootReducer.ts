import { combineReducers } from 'redux';

import auth from './modules/auth/reducer';
import cart from './modules/cart/reducer';

export default combineReducers({
  auth,
  cart,
});
