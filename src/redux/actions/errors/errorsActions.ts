import { Dispatch } from 'redux';

// Types
import { IErrorFeedback, ERROR_FEEDBACK } from './errorsActionsType';

/**
 * Returns Redux Thunk function and dispatches
 * a and error as a 'ERROR_FEEDBACK' action
 * @returns {function} - Redux Thunk function.
 */
export const errorsFeedbackAXN =
  (errors: {}) => (dispatch: Dispatch<IErrorFeedback>) =>
    dispatch({
      type: ERROR_FEEDBACK,
      payload: errors,
    });
