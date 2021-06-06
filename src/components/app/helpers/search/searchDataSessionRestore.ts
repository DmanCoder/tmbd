// Redux store
import { setQueryAXN } from '../../../../redux/actions/multiSearch/multiSearchActions';
import store from '../../../../redux/store/store';

// Utilities
import allUtils from '../../../../utils/allUtils';

const searchDataSessionRestore = (): void => {
  if (!allUtils.isEmptyUTL(window.sessionStorage.searchQuery)) {
    const query: string = JSON.parse(window.sessionStorage.searchQuery);
    store.dispatch(setQueryAXN(query));
  }
};

export default searchDataSessionRestore;
