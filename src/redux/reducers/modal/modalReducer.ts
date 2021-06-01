// Action types
import {
  MODAL_TOGGLE,
  MODAL_SET_TRAILERS,
  IModalDispatchTypes,
} from '../../actions/modal/modalActionsTypes';

type Modal = {
  isOpen: boolean;
  trailers: any;
};

const defaultState: Modal = {
  isOpen: false,
  trailers: {
    id: 105671,
    results: [
      {
        id: '556057eac3a36868e5005702',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: 'IIeSDILTE5M',
        name: 'Chicago Fire: Season One | Trailer | Coming to DVD Sept 2013',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
    ],
  },
};

// Movies Reducer TODO: Change the type of `action`
const modalReducer = (state = defaultState, action: IModalDispatchTypes) => {
  switch (action.type) {
    case MODAL_TOGGLE:
      return {
        ...state,
        isOpen: action.payload,
      };
    case MODAL_SET_TRAILERS:
      return {
        ...state,
        trailers: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
