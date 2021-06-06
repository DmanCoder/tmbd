import { Dispatch } from 'react';
import store from '../../store/store';

// Init
import { dbAPI } from '../../../api/init';

// Action types
import { loadingToggleAXN } from '../loading/loadingActions';
import { SET_MEDIA_DETAILS } from './detailsActionsTypes';
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
        const mediaDetails = {
          ...response.data,
          md_media_type: mediaType,
          md_id: id,
        };

        // Save to session storage
        sessionStorage.setItem('mediaDetails', JSON.stringify(mediaDetails));

        store.dispatch(
          setMediaDetailsAXN({
            ...mediaDetails,
          })
        );

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

/**
 * Returns Redux Thunk function that saves media details to state
 * and dispatches GET_DETAILS' action
 * @returns {function} - Redux Thunk function.
 */

export const setMediaDetailsAXN = (media: any) => (dispatch: Dispatch<any>) => {
  return dispatch({
    type: SET_MEDIA_DETAILS,
    payload: media,
  });
};
