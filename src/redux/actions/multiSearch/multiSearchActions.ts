import { Dispatch } from 'react';
import store from '../../store/store';

// Init
import { dbAPI } from '../../../api/init';

// Actions
import { loadingToggleAXN } from '../loading/loadingActions';

// Action types
import {
  GET_MULTI_SEARCH_QUERY,
  SET_SEARCH_QUERY,
  IMultiSearchAction,
} from './multiSearchActionsTypes';
import { ERROR_FEEDBACK, IErrorFeedback } from '../errors/errorsActionsType';

/**
 * Returns Redux Thunk function that initiates an axios request
 * and dispatches the response as a 'GET_MULTI_SEARCH_QUERY' action
 * @returns {function} - Redux Thunk function.
 */
export const getMultiSearchQueryAXN =
  (query: string, history: any) =>
  (dispatch: Dispatch<IMultiSearchAction | IErrorFeedback>) => {
    // Set loading state to true
    store.dispatch(loadingToggleAXN(true));

    //  Get language
    const language: string = store.getState().languageRXS;

    // Endpoint url setup
    const params: string = `?language=${language}&query=${query}&page=1`;
    const endPoint: string = `/api/search/multi${params}`; // TODO Crate pagination

    // Api call - Fetches TV shows, movies, people and more...
    return dbAPI
      .get(endPoint)
      .then((response) => {
        // Save to session storage
        sessionStorage.setItem('searchQuery', JSON.stringify(response.data.results));

        // Save to state
        store.dispatch(setQueryAXN(response.data.results));

        // Set loading state to false
        store.dispatch(loadingToggleAXN(false));

        history.push('/search')
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

/**
 * Returns Redux Thunk function that saves search query to state
 * and dispatches GET_MULTI_SEARCH_QUERY' action
 * @returns {function} - Redux Thunk function.
 */
export const setQueryAXN = (query: any) => (dispatch: Dispatch<any>) => {
  return dispatch({
    type: GET_MULTI_SEARCH_QUERY,
    payload: query,
  });
};
