export const GET_FREE_TO_WATCH_TV_SHOWS: string = 'GET_FREE_TO_WATCH_TV_SHOWS';
export const GET_FREE_TO_WATCH_MOVIES: string = 'GET_FREE_TO_WATCH_MOVIES';

export type FreeType = {
  // API data structure
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  name: string;
  original_name: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// Interface - up coming movies dispatch types
export interface IFreeAction {
  type: typeof GET_FREE_TO_WATCH_TV_SHOWS;
  payload: FreeType[];
}

// All Movie reducer dispatch types
export type FreeDispatchTypes = IFreeAction;
