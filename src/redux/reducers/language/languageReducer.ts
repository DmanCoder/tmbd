// Action types
import {
  SET_LANGUAGE,
  ISetLanguageDispatchTypes,
} from '../../actions/language/languageActionsType';

// Default State
const defaultState: string = 'en-US';

// Movies Reducer TODO: Change the type of `action`
const loadingReducer = (
  state = defaultState,
  action: ISetLanguageDispatchTypes
) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
