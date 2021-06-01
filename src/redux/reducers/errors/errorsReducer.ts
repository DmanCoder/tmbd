// Action types
import {
  ERROR_FEEDBACK,
  IErrorFeedback,
} from '../../actions/errors/errorsActionsType';

// Default State
const defaultState: {} = {};

// Movies Reducer TODO: Change the type of `action`
const loadingReducer = (state = defaultState, action: IErrorFeedback) => {
  switch (action.type) {
    case ERROR_FEEDBACK:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
