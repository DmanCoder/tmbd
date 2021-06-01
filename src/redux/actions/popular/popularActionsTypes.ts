export const GET_POPULAR_TV_SHOWS: string = 'GET_POPULAR_TV_SHOWS';

export type PopularType = {
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
export interface IPopularAction {
  type: typeof GET_POPULAR_TV_SHOWS;
  payload: PopularType[];
}

// All Movie reducer dispatch types
export type PopularDispatchTypes = IPopularAction;
