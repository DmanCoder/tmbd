import { Dispatch } from 'react';
import store from '../../store/store';

// Init
import { dbAPI } from '../../../api/init';

// Action types
import { loadingToggleAXN } from '../loading/loadingActions';
import { GET_TV_DETAILS } from './detailsActionsTypes';
import { ERROR_FEEDBACK } from '../errors/errorsActionsType';

/**
 * Returns Redux Thunk function that initiates an axios request
 * and dispatches the response as a 'GET_DETAILS' action
 * @returns {function} - Redux Thunk function.
 */
export const getDetailsAXN =
  (mediaType: string = 'tv', id: number, history: any) =>
  (dispatch: Dispatch<any>) => {
    // Set loading state to true
    store.dispatch(loadingToggleAXN(true));

    // Get Language
    const language: string = store.getState().languageRXS;

    // Endpoint url setup
    const params: string = `?media_type=${mediaType}&id=${id}&language=${language}&page=1`;
    const endPoint: string = `/api/tv/details${params}`; // TODO Crate pagination testing
    //   Api call - Fetches trends...
    return dbAPI
      .get(endPoint)
      .then((response) => {
        const media = { type: mediaType, id };
        sessionStorage.setItem('media', JSON.stringify(media));

        dispatch({
          type: GET_TV_DETAILS,
          payload: response.data,
        });

        // Set loading state to false
        store.dispatch(loadingToggleAXN(false));

        // Push to details page
        history.push('/details');
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
