// Action types
import {
  GET_POPULAR_TV_SHOWS,
  PopularDispatchTypes,
} from '../../actions/popular/popularActionsTypes';

// Movie reducer types
import { IDefaultState } from './popularReducerTypes';

// Default State
const defaultState: IDefaultState = {
  tvShows: [],
};

// Movies Reducer TODO: Change the type of `action`
const popularReducer = (state = defaultState, action: PopularDispatchTypes) => {
  switch (action.type) {
    case GET_POPULAR_TV_SHOWS:
      return {
        ...state,
        tvShows: action.payload,
      };
    default:
      return state;
  }
};

export default popularReducer;
