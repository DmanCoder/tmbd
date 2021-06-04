export const SET_MEDIA_DETAILS: string = 'SET_MEDIA_DETAILS';

export type CreatedByType = {
  id: number;
  credit_id: string;
  name: string;
  profile_path: string | null;
};

export type LastEpisodeToAir = {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
};

export type Seasons = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
};

export type CreditCast = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type DetailType = {
  // API data structure
  backdrop_path: string;
  created_by: CreatedByType[];
  episode_run_time: number[];
  first_air_date: string;
  cast_credit: CreditCast[];
  genres: [];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: [];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: string | null;
  networks: [];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: [];
  production_countries: [];
  seasons: Seasons[];
  spoken_languages: [];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;

  // NOT FROM API
  md_id: number;
  md_media_type: string;
};

// Interface - up coming movies dispatch types
export interface IDetailsAction {
  type: typeof SET_MEDIA_DETAILS;
  payload: DetailType;
}

// All Movie reducer dispatch types
export type DetailsDispatchTypes = IDetailsAction;
