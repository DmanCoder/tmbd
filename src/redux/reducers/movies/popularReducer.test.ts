// Movie Actions types
import { GET_POPULAR_TV_SHOWS } from '../../actions/popular/popularActionsTypes';

// Movie reducer
import popularReducer from './popularReducer';

const defaultState = { tvShows: [] };

describe('Movies Reducer', () => {
  it('Should return default state if supplied incorrect action type', () => {
    const newState = popularReducer(undefined, {
      type: 'UNKNOWN_TYPE',
      payload: [],
    });
    expect(newState).toEqual(defaultState);
  });

  it('Should return new state when `GET_POPULAR_TV_SHOWS` is used', () => {
    const tvShows = [
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

    const newState = popularReducer(undefined, {
      type: GET_POPULAR_TV_SHOWS,
      payload: tvShows,
    });

    expect(newState.tvShows).toEqual(tvShows);
  });
});
