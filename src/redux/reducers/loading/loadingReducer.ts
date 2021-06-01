// Action types
import {
  LOADING_TOGGLE,
  ILoadingDispatchTypes,
} from '../../actions/loading/loadingActionsTypes';

// Default State
const defaultState: boolean = false;

// Movies Reducer TODO: Change the type of `action`
const loadingReducer = (
  state = defaultState,
  action: ILoadingDispatchTypes
) => {
  switch (action.type) {
    case LOADING_TOGGLE:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
