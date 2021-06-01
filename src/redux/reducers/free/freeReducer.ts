import {
  GET_FREE_TO_WATCH_TV_SHOWS,
  GET_FREE_TO_WATCH_MOVIES,
} from '../../actions/free/freeActionsTypes';

// Movie reducer types
import { IDefaultState } from './freeReducerTypes';

// Default State
const defaultState: IDefaultState = {
  tvShows: [],
  movies: [],
};

// Search Query Reducer TODO: Change the type of `action`
const freeReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_FREE_TO_WATCH_TV_SHOWS:
      return {
        ...state,
        tvShows: action.payload,
      };
    case GET_FREE_TO_WATCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default freeReducer;
