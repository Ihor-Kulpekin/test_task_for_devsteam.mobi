import { all, takeLatest } from 'redux-saga/effects';

import { PhotoActions } from 'constants/constants';
import photoSaga from './photoSaga';

export default function* rootSaga() {
  yield all([yield takeLatest(PhotoActions.GET_PHOTOS, photoSaga)]);
}
