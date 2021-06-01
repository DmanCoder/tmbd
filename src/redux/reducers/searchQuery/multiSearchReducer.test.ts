// Movie Actions types
import { GET_MULTI_SEARCH_QUERY } from '../../actions/multiSearch/multiSearchActionsTypes';

// Movie reducer
import searchQueryReducer from './multiSearchReducer';

const defaultState = { query: [] };

describe('Movies Reducer', () => {
  it('Should return default state if supplied incorrect action type', () => {
    const newState = searchQueryReducer(undefined, {
      type: 'UNKNOWN_TYPE',
      payload: [],
    });
    expect(newState).toEqual(defaultState);
  });

  it('Should return new state when `GET_MULTI_SEARCH_QUERY` is used', () => {
    const query = [
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

    const newState = searchQueryReducer(undefined, {
      type: GET_MULTI_SEARCH_QUERY,
      payload: query,
    });

    expect(newState.query).toEqual(query);
  });
});
