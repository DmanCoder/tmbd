import {
  GET_TRENDING_TODAY,
  GET_TRENDING_WEEK,
} from '../../actions/trending/trendingActionsTypes';

// Movie reducer types
import { IDefaultState } from './trendingReducerTypes';

// Default State
const defaultState: IDefaultState = {
  today: [],
  week: [],
};

// Search Query Reducer TODO: Change the type of `action`
const trendingReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_TRENDING_TODAY:
      return {
        ...state,
        today: action.payload,
      };
    case GET_TRENDING_WEEK:
      return {
        ...state,
        week: action.payload,
      };
    default:
      return state;
  }
};

export default trendingReducer;
