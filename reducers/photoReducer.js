import { PhotoActions } from 'constants/constants';

const initialState = {
  error: false,
  loading: false,
  photos: []
};

export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case PhotoActions.GET_PHOTOS: {
      return {
        ...state,
        error: false,
        loading: true
      };
    }
    case PhotoActions.GET_PHOTOS_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        photos: action.photos
      };
    }
    case PhotoActions.GET_PHOTOS_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
