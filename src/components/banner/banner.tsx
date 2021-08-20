import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/store/store";
import { useHistory } from "react-router-dom";

// Axios init
import { imgFilterURL } from "../../api/init";

// Redux actions
import { getPopularTvShowsAXN } from "../../redux/actions/popular/popularActions";
import { getMultiSearchQueryAXN } from "../../redux/actions/multiSearch/multiSearchActions";

// Gsap
import gsap from "../../animations/gsapConfig";

// Utilities
import allUtils from "../../utils/allUtils";

const Banner: React.FC<{}> = () => {
  const history = useHistory();
  const { tvShows } = useSelector((state: RootStore) => state.popularRXS);

  // Dispatch action
  const dispatch = useDispatch();
  React.useEffect(() => {
    // Get popular tv shows
    dispatch(getPopularTvShowsAXN());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Change background when `tvShows` is updated
  const [url, setBgURL] = React.useState<{ imgURL: string; bgURL: string }>({
    bgURL: "",
    imgURL: "",
  });

  React.useEffect(() => {
    const tvLength: number = tvShows.length;
    const tvIndex: number = Math.floor(Math.random() * (tvLength - 1));
    const tvBanner = tvShows[tvIndex];

    const linearGradient =
      "linear-gradient(to right,rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0)  100%)";
    const bgURL = `${linearGradient}`;
    const imgURL = `${imgFilterURL}/${tvBanner?.backdrop_path}`;
    setBgURL({ bgURL, imgURL });
  }, [tvShows]);

  const onImageLoad = () => {
    console.log("Loaded");
    const introTL = gsap.timeline();
    introTL
      .to(".spinner-box", {
        duration: 3,
        autoAlpha: 0,
      })
      .to(".intro", {
        duration: 0.8,
        autoAlpha: 0,
      })
      .to("body", {
        delay: -0.8,
        css: {
          overflow: "auto",
        },
      });
  };

  // Query state
  const [query, setQuery] = React.useState<string>("");
  const onFetchUserQuery = () => {
    if (allUtils.isEmptyUTL(query)) return;

    // Runs only if `query` is not empty and fetches user input from API
    dispatch(getMultiSearchQueryAXN(query, history));
  };

  return (
    <div
      data-test="banner-component"
      className="banner"
      style={{
        background: url.bgURL,
      }}
    >
      <img
        onLoad={onImageLoad}
        className="banner__main-image"
        src={url.imgURL}
        alt="Background"
      />
      <header className="banner__header">
        <h2 data-test="title" className="banner__title">
          {allUtils.transUTL("translateBanner.title")}
        </h2>
        <h3 data-test="sub-title" className="banner__sub-title">
          {allUtils.transUTL("translateBanner.subTitle")}
        </h3>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            onFetchUserQuery();
          }}
          className="banner__search"
        >
          <input
            data-test="search-input"
            type="text"
            placeholder={allUtils.transUTL("translateBanner.inputPlaceholder")}
            name="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoCorrect="off"
            autoComplete="off"
            spellCheck="false"
          />
          <button data-test="search-btn" onClick={onFetchUserQuery}>
            {allUtils.transUTL("translateBanner.searchBtn")}
          </button>
        </form>
      </header>
    </div>
  );
};

export default Banner;
