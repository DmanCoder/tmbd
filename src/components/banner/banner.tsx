import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../redux/store/store';

// Redux actions
import { getPopularTvShowsAXN } from '../../redux/actions/popular/popularActions';
import { getMultiSearchQueryAXN } from '../../redux/actions/multiSearch/multiSearchActions';

// Utilities
import allUtils from '../../utils/allUtils';

// Banner helpers
import handleCssBackground from './helpers/handleCssBackground';

const Banner: React.FC<{}> = () => {
  const { tvShows } = useSelector((state: RootStore) => state.popularRXS);

  // Dispatch action
  const dispatch = useDispatch();
  React.useEffect(() => {
    // Get popular tv shows
    dispatch(getPopularTvShowsAXN());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Change background when `tvShows` is updated
  const [bgURL, setBgURL] = React.useState<string>('');
  React.useEffect(() => {
    const tvLength: number = tvShows.length;
    const tvIndex: number = Math.floor(Math.random() * (tvLength - 1));
    const tvBanner = tvShows[tvIndex];

    // CSS background inline styles
    const bgURL = handleCssBackground(tvBanner?.backdrop_path);
    setBgURL(bgURL);
  }, [tvShows]);

  // Query state
  const [query, setQuery] = React.useState<string>('');
  const onFetchUserQuery = () => {
    if (allUtils.isEmptyUTL(query)) return;

    // Runs only if `query` is not empty and fetches user input from API
    dispatch(getMultiSearchQueryAXN(query));
  };

  return (
    <div
      data-test="banner-component"
      className="banner"
      style={{
        background: bgURL,
      }}
    >
      <header className="banner__header">
        <h2 data-test="title" className="banner__title">
          {allUtils.transUTL('translateBanner.title')}
        </h2>
        <h3 data-test="sub-title" className="banner__sub-title">
          {allUtils.transUTL('translateBanner.subTitle')}
        </h3>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            event.preventDefault()
          }
          className="banner__search"
        >
          <input
            data-test="search-input"
            type="text"
            placeholder={allUtils.transUTL('translateBanner.inputPlaceholder')}
            name="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoCorrect="off"
            autoComplete="off"
            spellCheck="false"
          />
          <button data-test="search-btn" onClick={onFetchUserQuery}>
            {allUtils.transUTL('translateBanner.searchBtn')}
          </button>
        </form>
      </header>
    </div>
  );
};

export default Banner;
