export const GET_TV_SHOW_TRAILERS: string = 'GET_TV_SHOW_TRAILERS';

type Trailers = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

export type TrailerType = {
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
  trailers: Trailers[];
};

// Interface - up coming movies dispatch types
export interface ITrailerAction {
  type: typeof GET_TV_SHOW_TRAILERS;
  payload: TrailerType[];
}

// All Movie reducer dispatch types
export type TrailerDispatchTypes = ITrailerAction;
