import { combineReducers } from 'redux';

// REDUCERS
import loadingReducer from './loading/loadingReducer';
import popularReducer from './movies/popularReducer';
import multiSearchReducer from './searchQuery/multiSearchReducer';
import trendingReducer from './trending/trendingReducer';
import freeReducer from './free/freeReducer';
import errorsReducer from './errors/errorsReducer';
import languageReducer from './language/languageReducer';
import trailerReducer from './trailer/trailerReducer';
import modalReducer from './modal/modalReducer';
import detailsReducer from './details/detailsReducer';

const rootReducer = combineReducers({
  loadingRXS: loadingReducer,
  popularRXS: popularReducer,
  searchRXS: multiSearchReducer,
  trendingRXS: trendingReducer,
  freeRXS: freeReducer,
  trailerRXS: trailerReducer,
  errorsRXS: errorsReducer,
  languageRXS: languageReducer,
  modalRXS: modalReducer,
  detailsRXS: detailsReducer,
});

export default rootReducer;
