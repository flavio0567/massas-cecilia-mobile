import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import api from '../../../shared/service/api';

import { signInSuccess, signFailure } from './actions';

interface Credentials {
  mobile: string;
  password: string;
}

export function* signIn(credential: Credentials): SagaIterator {
  try {
    const response = yield call(api.get, `users`);

    const { token, user } = response.data[0];

    if (!user) {
      Alert.alert('Erro no logon', 'Usuário não encontrado, tente novamente.');
      return;
    }

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Authtentication failure', 'Logon failure, try again');
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
