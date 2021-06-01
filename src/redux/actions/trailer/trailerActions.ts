import { Dispatch } from 'redux';
import store from '../../store/store';

// Init
import { dbAPI } from '../../../api/init';

// Actions
import { loadingToggleAXN } from '../loading/loadingActions';

// ACTION TYPES
import { ITrailerAction, GET_TV_SHOW_TRAILERS } from './trailerActionsTypes';
import { ERROR_FEEDBACK, IErrorFeedback } from '../errors/errorsActionsType';


/**
 * Returns Redux Thunk function that initiates an axios request
 * and dispatches the response as a 'GET_TV_SHOW_TRAILERS' action
 * @returns {function} - Redux Thunk function.
 */
export const getTvShowTrailers =
  () => (dispatch: Dispatch<ITrailerAction | IErrorFeedback>) => {
    // Set loading state to true
    store.dispatch(loadingToggleAXN(true));

    // Get user selected language
    const language: string = store.getState().languageRXS;

    // Endpoint url setup
    const params: string = `?language=${language}&page=1`;
    const endPoint: string = `/api/trailers/tv${params}`; // TODO Crate pagination

    // Api call - Get Free airing tv, movies
    return dbAPI
      .get(endPoint)
      .then((response) => {
        dispatch({
          type: GET_TV_SHOW_TRAILERS,
          payload: response.data.results,
        });

        // Set loading state to false
        store.dispatch(loadingToggleAXN(false));
      })
      .catch((err) => {
        try {
          const { errors } = err?.response?.data;
          // Catch errors
          dispatch({
            type: ERROR_FEEDBACK,
            payload: errors,
          });
        } catch (catchErr) {
          dispatch({
            type: ERROR_FEEDBACK,
            payload: { api: 'Could not connect to server' },
          });
        }

        // Set loading state to false
        store.dispatch(loadingToggleAXN(false));
      });
  };
