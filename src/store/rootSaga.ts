import { all } from 'redux-saga/effects';

import auth from './modules/auth/sagas';
import cart from './modules/cart/sagas';

export default function* rootSaga(): Promise<any> {
  return yield all([auth, cart]);
}
