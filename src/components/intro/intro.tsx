import gsap from '../../animations/gsapConfig';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store/store';
import allUtils from '../../utils/allUtils';

const Intro: React.FC = () => {
  const trendingRXS = useSelector((state: RootStore) => state.trendingRXS);

  React.useEffect(() => {
    if (!allUtils.isEmptyUTL(trendingRXS)) {
      const introTL = gsap.timeline();
      introTL
        .set('body', { css: { visibility: 'visible' } })
        .to('.spinner-box', {
          duration: 1,
          autoAlpha: 0,
        })
        .to('.intro', {
          duration: 0.5,
          autoAlpha: 0,
        });
    }
  }, [trendingRXS.week]);

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
