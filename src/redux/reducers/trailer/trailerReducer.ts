import { GET_TV_SHOW_TRAILERS } from '../../actions/trailer/trailerActionsTypes';

// Movie reducer types
import { IDefaultState } from './trailerReducerTypes';

// Default State
const defaultState: IDefaultState = {
  tvShows: [],
  movies: [],
};

// Search Query Reducer TODO: Change the type of `action`
const freeReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_TV_SHOW_TRAILERS:
      return {
        ...state,
        tvShows: action.payload,
      };
    default:
      return state;
  }
};

export default freeReducer;
