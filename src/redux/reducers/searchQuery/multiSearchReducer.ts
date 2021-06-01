import { GET_MULTI_SEARCH_QUERY } from '../../actions/multiSearch/multiSearchActionsTypes';

// Movie reducer types
import { IDefaultState } from './multiSearchReducerTypes';

// Default State
const defaultState: IDefaultState = {
  query: [],
};

// Search Query Reducer TODO: Change the type of `action`
const searchQueryReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_MULTI_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchQueryReducer;
