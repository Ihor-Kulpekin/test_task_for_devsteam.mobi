import { PhotoActions } from '../constants/constants';

export function getPhotos() {
  return {
    type: PhotoActions.GET_PHOTOS
  };
}

export function getPhotosSuccess(payload) {
  return {
    type: PhotoActions.GET_PHOTOS_SUCCESS,
    photos: payload
  };
}

export function getPhotosFailure(payload) {
  return {
    type: PhotoActions.GET_PHOTOS_FAILURE,
    error: payload
  };
}
