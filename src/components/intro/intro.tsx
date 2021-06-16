import gsap from '../../animations/gsapConfig';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store/store';
import allUtils from '../../utils/allUtils';

const Intro: React.FC = () => {
  const trendingRXS = useSelector((state: RootStore) => state.trendingRXS);
  const popularRXS = useSelector((state: RootStore) => state.popularRXS);
  const trailerRXS = useSelector((state: RootStore) => state.trailerRXS);
  const freeRXS = useSelector((state: RootStore) => state.freeRXS);

  React.useEffect(() => {
    if (
      !allUtils.isEmptyUTL(trendingRXS.week) &&
      !allUtils.isEmptyUTL(popularRXS.tvShows) &&
      !allUtils.isEmptyUTL(trailerRXS.tvShows) &&
      !allUtils.isEmptyUTL(freeRXS.tvShows)
    ) {
      const introTL = gsap.timeline();
      introTL
        .set('body', { css: { visibility: 'visible' } })
        .to('.spinner-box', {
          duration: 3,
          autoAlpha: 0,
        })
        .to('.intro', {
          duration: 0.8,
          autoAlpha: 0,
        })
        .to('body', {
          delay: -0.8,
          css: {
            overflow: 'auto',
          },
        });
    }
  }, [
    trendingRXS.week,
    popularRXS.tvShows,
    trailerRXS.tvShows,
    freeRXS.tvShows,
  ]);

  return (
    <React.Fragment>
      <div className="intro intro--one"></div>
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
      <div className="intro intro--two"></div>
    </React.Fragment>
  );
};
export default Intro;
