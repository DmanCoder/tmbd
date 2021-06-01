import { Dispatch } from 'redux';

// Types
import { ISetLanguageDispatchTypes, SET_LANGUAGE } from './languageActionsType';

/**
 * Returns Redux Thunk function that initiates an axios request
 * and dispatches the response as a 'SET_LANGUAGE' action
 * @returns {function} - Redux Thunk function.
 */
export const setLanguageAXN = (language: string) => (
  dispatch: Dispatch<ISetLanguageDispatchTypes>
) => {
  // Save data to sessionStorage
  window.sessionStorage.setItem('selectedLanguage', language);

  return dispatch({
    type: SET_LANGUAGE,
    payload: language,
  });
};
