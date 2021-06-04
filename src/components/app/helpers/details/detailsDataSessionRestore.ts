// Redux store
import { setMediaDetailsAXN } from '../../../../redux/actions/details/detailsActions';
import store from '../../../../redux/store/store';

// Utilities
import allUtils from '../../../../utils/allUtils';

const detailsDataSessionRestore = (): void => {
  if (!allUtils.isEmptyUTL(window.sessionStorage.mediaDetails)) {
    const details: string = JSON.parse(window.sessionStorage.mediaDetails);
    store.dispatch(setMediaDetailsAXN(details));
  }
};

export default detailsDataSessionRestore;
