// import axios, { Method, AxiosResponse } from 'axios';
// import { METHODS } from 'http';
import axios from 'axios';

// Check production
const isProd: boolean = process.env.NODE_ENV === 'production' ? true : false;
const isAttr: boolean | undefined =
  process.env.NODE_ENV === 'production' ? undefined : true;

// Base URL string
const dbURL: string = !isProd
  ? 'http://localhost:5000'
  : 'https://my-tmdb-api.herokuapp.com';

// Image URL
const imgURL: string = 'https://image.tmdb.org/t/p';
const imgFilterURL: string = `${imgURL}/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/`;
const imgFilterURL2: string = `${imgURL}/w1920_and_h427_multi_faces/`;
/*
  "backdrop_sizes": [
    "w300",
    "w780",
    "w1280",
    "original"
  ],
  "logo_sizes": [
    "w45",
    "w92",
    "w154",
    "w185",
    "w300",
    "w500",
    "original"
  ],
  "poster_sizes": [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ],
  "profile_sizes": [
    "w45",
    "w185",
    "h632",
    "original"
  ],
  "still_sizes": [
    "w92",
    "w185",
    "w300",
    "original"
  ]
*/

// AXIOS INSTANCE: BASE URL FOR THE MOVIE DATA BASE
const dbAPI = axios.create({
  baseURL: dbURL,
});

export { dbAPI, dbURL, imgURL, imgFilterURL, imgFilterURL2, isProd, isAttr };
