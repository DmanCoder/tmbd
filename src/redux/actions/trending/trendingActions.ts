import { Dispatch } from 'react';
import store from '../../store/store';

// Init
import { dbAPI } from '../../../api/init';

// Action types
import {
  GET_TRENDING_TODAY,
  GET_TRENDING_WEEK,
  ITrendingWeekAction,
} from './trendingActionsTypes';
import { ERROR_FEEDBACK, IErrorFeedback } from '../errors/errorsActionsType';
import { loadingToggleAXN } from '../loading/loadingActions';

/**
 * Returns Redux Thunk function that initiates an axios request
 * and dispatches the response as a 'GET_TRENDING_TODAY' | `GET_TRENDING_WEEK` action
 * @returns {function} - Redux Thunk function.
 */
export const getTrendingAXN =
  (dayOrWeek: string) =>
  (dispatch: Dispatch<ITrendingWeekAction | IErrorFeedback>) => {
    // Set loading state to true
    store.dispatch(loadingToggleAXN(true));

    // Get Language
    const language: string = store.getState().languageRXS;

    // Endpoint url setup
    const params: string = `?language=${language}&page=1`;
    const endPoint: string = `/api/trending/all/${dayOrWeek}${params}`; // TODO Crate pagination

    //   Api call - Fetches trends...
    return dbAPI
      .get(endPoint)
      .then((response) => {
        if (dayOrWeek === 'today') {
          dispatch({
            type: GET_TRENDING_TODAY,
            payload: response.data.results,
          });
        } else if (dayOrWeek === 'week') {
          dispatch({
            type: GET_TRENDING_WEEK,
            payload: response.data.results,
          });
        }

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
