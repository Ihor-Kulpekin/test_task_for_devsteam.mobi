import { call, put } from 'redux-saga/effects';

import { getPhotosSuccess, getPhotosFailure } from 'actions/photoActions';
import { getPhotos as apiGetPhotos } from 'api/api';

export default function* photoSaga() {
  try {
    const result = yield call(apiGetPhotos);
    yield put(getPhotosSuccess(result));
  } catch (error) {
    yield put(getPhotosFailure(error));
  }
}
