import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store/store';

import Banner from '../../components/banner/banner';
import Gallery from '../../components/gallery/gallery';
import Trailers from '../../components/trailers/trailers';

import allUtils from '../../utils/allUtils';

const Home: React.FC = () => {
  const popularRXS = useSelector((state: RootStore) => state.popularRXS);
  const trendingRXS = useSelector((state: RootStore) => state.trendingRXS);
  const freeRXS = useSelector((state: RootStore) => state.freeRXS);
  const trailerRXS = useSelector((state: RootStore) => state.trailerRXS);

  React.useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-test="home-component" className="container">
      <Banner />
      <Gallery
        title={allUtils.transUTL('translateGallery.titlePopular')}
        db={popularRXS.tvShows}
      />
      <Gallery
        title={allUtils.transUTL('translateGallery.titleFree')}
        db={freeRXS.tvShows}
      />

      <Trailers
        title={allUtils.transUTL('translateTrailers.latestTrailers')}
        db={trailerRXS.tvShows}
      />

      <Gallery
        title={allUtils.transUTL('translateGallery.titleTrending')}
        db={trendingRXS.week}
        isGraph={true}
      />
    </div>
  );
};
export default Home;
