import { Dispatch } from 'redux';

// Action types
import { ILoadingDispatchTypes, LOADING_TOGGLE } from './loadingActionsTypes';

// Loading toggle action
export const loadingToggleAXN = (isLoading: boolean) => (
  dispatch: Dispatch<ILoadingDispatchTypes>
) =>
  dispatch({
    type: LOADING_TOGGLE,
    payload: isLoading,
  });
