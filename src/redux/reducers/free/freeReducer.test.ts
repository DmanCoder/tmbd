// Movie Actions types
import {
  GET_FREE_TO_WATCH_TV_SHOWS,
  GET_FREE_TO_WATCH_MOVIES,
} from '../../actions/free/freeActionsTypes';

// Movie reducer
import freeReducer from './freeReducer';

const defaultState = { tvShows: [], movies: [] };

describe('Free Reducer', () => {
  it('Should return default state if supplied incorrect action type', () => {
    const newState = freeReducer(undefined, {
      type: 'UNKNOWN_TYPE',
      payload: [],
    });
    expect(newState).toEqual(defaultState);
  });

  it('Should return new state when `GET_FREE_TO_WATCH_TV_SHOWS` is used', () => {
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
    ];
    const newState = freeReducer(undefined, {
      type: GET_FREE_TO_WATCH_TV_SHOWS,
      payload: tvShows,
    });
    expect(newState.tvShows).toEqual(tvShows);
  });

  it('Should return new state when `GET_FREE_TO_WATCH_MOVIES` is used', () => {
    const movies = [
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
    const newState = freeReducer(undefined, {
      type: GET_FREE_TO_WATCH_MOVIES,
      payload: movies,
    });
    expect(newState.movies).toEqual(movies);
  });
});
