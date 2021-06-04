// Movie Actions types
import { SET_MEDIA_DETAILS } from '../../actions/details/detailsActionsTypes';

// Movie reducer
import trendingReducer from './detailsReducer';

const defaultState = { week: [], today: [] };

describe('Movies Reducer', () => {
  it('Should return default state if supplied incorrect action type', () => {
    const newState = trendingReducer(undefined, {
      type: 'UNKNOWN_TYPE',
      payload: [],
    });
    expect(newState).toEqual(defaultState);
  });

  it('Should return new state when `GET_TRENDING_WEEK` is used', () => {
    const week = [
      {
        adult: false,
        backdrop_path: '',
        genre_ids: [1, 1],
        id: 2,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 3,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 3,
        vote_count: 3,
      },
    ];
    const newState = trendingReducer(undefined, {
      type: GET_TRENDING_WEEK,
      payload: week,
    });
    expect(newState.week).toEqual(week);
  });
  it('Should return new state when `GET_TRENDING_WEEK` is used', () => {
    const today = [
      {
        adult: false,
        backdrop_path: '',
        genre_ids: [1, 1],
        id: 2,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 3,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 3,
        vote_count: 3,
      },
    ];
    const newState = trendingReducer(undefined, {
      type: GET_TRENDING_TODAY,
      payload: today,
    });
    expect(newState.today).toEqual(today);
  });
});
