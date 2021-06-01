// Movie Actions types
import { GET_TV_SHOW_TRAILERS } from '../../actions/trailer/trailerActionsTypes';

// Movie reducer
import trailerReducer from './trailerReducer';

const defaultState = { tvShows: [], movies: [] };

describe('Free Reducer', () => {
  it('Should return default state if supplied incorrect action type', () => {
    const newState = trailerReducer(undefined, {
      type: 'UNKNOWN_TYPE',
      payload: [],
    });
    expect(newState).toEqual(defaultState);
  });

  it('Should return new state when `GET_TV_SHOW_TRAILERS` is used', () => {
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
        trailers: {
          id: 65820,
          results: [
            {
              id: '',
              iso_639_1: '',
              iso_3166_1: '',
              key: '',
              name: '',
              site: '',
              size: 1080,
              type: '',
            },
          ],
        },
        release_date: '',
        title: '',
        video: false,
        vote_average: 3,
        vote_count: 3,
      },
    ];
    const newState = trailerReducer(undefined, {
      type: GET_TV_SHOW_TRAILERS,
      payload: tvShows,
    });
    expect(newState.tvShows).toEqual(tvShows);
  });
});
