import { Dispatch } from 'redux';

// Action types
import {
  MODAL_TOGGLE,
  MODAL_SET_TRAILERS,
  IModalToggle,
  IModalSetTrailers,
} from './modalActionsTypes';

/**
 * Returns Redux Thunk function and dispatches
 * a boolean toggle as a 'MODAL_TOGGLE' action
 * @returns {function} - Redux Thunk function.
 */
export const modalToggleAXN =
  (isOpen: boolean) => (dispatch: Dispatch<IModalToggle>) => {
    return dispatch({
      type: MODAL_TOGGLE,
      payload: isOpen,
    });
  };

/**
 * Returns Redux Thunk function and dispatches
 * `trailer` object as a 'MODAL_SET_TRAILERS' action
 * @returns {function} - Redux Thunk function.
 */
export const modalSetTrailerAXN =
  (trailer: any) => (dispatch: Dispatch<IModalSetTrailers>) => {
    return dispatch({
      type: MODAL_SET_TRAILERS,
      payload: trailer,
    });
  };
