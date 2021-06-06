export const GET_MULTI_SEARCH_QUERY = 'GET_MULTI_SEARCH_QUERY';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export type MultiSearchType = {
  // API data structure
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
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
export interface IMultiSearchAction {
  type: typeof GET_MULTI_SEARCH_QUERY;
  payload: MultiSearchType[];
}

// All Movie reducer dispatch types
export type MultiSearchDispatchTypes = IMultiSearchAction;
