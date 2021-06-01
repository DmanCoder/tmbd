import { GET_TV_DETAILS } from '../../actions/details/detailsActionsTypes';

// Movie reducer types
import { IDefaultState } from './detailsReducerTypes';

// Default State
const defaultState: IDefaultState = {
  tv: {
    backdrop_path: '/vNDmspYMfwfPJ6tauchiwRkPJCZ.jpg',
    created_by: [
      {
        id: 1212604,
        credit_id: '52533ba819c295794006f3a9',
        name: 'Jonathan Murray',
        profile_path: null,
      },
      {
        id: 1212605,
        credit_id: '52533ba819c295794006f3af',
        name: 'Mary-Ellis Bunim',
        profile_path: null,
      },
    ],
    episode_run_time: [60],
    first_air_date: '2003-09-09',
    genres: [],
    homepage: '',
    id: 123,
    in_production: false,
    languages: [],
    last_air_date: '2004-11-05',
    last_episode_to_air: {
      air_date: '2004-11-05',
      episode_number: 40,
      id: 5920,
      name: 'Boot Camp',
      overview: '',
      production_code: '',
      season_number: 2,
      still_path: null,
      vote_average: 0,
      vote_count: 0,
    },
    name: 'Starting Over',
    next_episode_to_air: null,
    networks: [],
    number_of_episodes: 235,
    number_of_seasons: 2,
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Starting Over',
    overview:
      'Starting Over is an American reality TV show that follows the lives of women who are experiencing difficulty in their lives and want to make changes, with the help of life coaches. It was the first reality TV show to be nominated for a Daytime Emmy Award. Six women at a time work to overcome obstacles and meet personal goals. When it is determined that a woman has met all her goals, she "graduates" from the house and is replaced by a new roommate. On the other hand, if it\'s determined that she\'s not met her goals, she could be put on probation, or even asked to leave.',
    popularity: 11.623,
    poster_path: '/dfoTgMdVKF08Sqp4AeLlMcLaVV7.jpg',
    production_companies: [],
    production_countries: [],
    seasons: [
      {
        air_date: '2003-09-08',
        episode_count: 195,
        id: 358,
        name: 'Season 1',
        overview: '',
        poster_path: null,
        season_number: 1,
      },
      {
        air_date: '2004-09-13',
        episode_count: 40,
        id: 359,
        name: 'Season 2',
        overview: '',
        poster_path: null,
        season_number: 2,
      },
    ],
    spoken_languages: [],
    status: 'Ended',
    tagline: '',
    type: 'Scripted',
    vote_average: 0,
    vote_count: 0,
  },
};

// Search Query Reducer TODO: Change the type of `action`
const detailsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_TV_DETAILS:
      return {
        ...state,
        tv: action.payload,
      };

    default:
      return state;
  }
};

export default detailsReducer;
