import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

export const middleware = [thunk];

export type RootStore = ReturnType<typeof rootReducer>;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export type RootState = ReturnType<typeof store.getState>;

export default store;
