export const GET_TRENDING_WEEK: string = 'GET_TRENDING_WEEK';
export const GET_TRENDING_TODAY: string = 'GET_TRENDING_TODAY';

export type TrendingType = {
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
export interface ITrendingTodayAction {
  type: typeof GET_TRENDING_TODAY;
  payload: TrendingType[];
}

export interface ITrendingWeekAction {
  type: typeof GET_TRENDING_WEEK;
  payload: TrendingType[];
}

// All Movie reducer dispatch types
export type TrendingDispatchTypes = ITrendingTodayAction | ITrendingWeekAction;
