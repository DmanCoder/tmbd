import React from 'react';
import { Link } from 'react-router-dom';

// Assests
import { ReactComponent as LogoBig } from '../../assets/logo/logo-big.svg';

// Utilities
import allUtils from '../../utils/allUtils';

const Footer: React.FC = () => {
  return (
    <div data-test="footer-component" className="footer">
      <div className="footer__content">
        <div data-test="logo">
          <Link to="/">
            <LogoBig />
          </Link>
        </div>
        <div>
          <h5 data-test="title-basic">
            {allUtils.transUTL('translateFooter.theBasics')}
          </h5>
          <ul>
            <li data-test="link-basic">
              {allUtils.transUTL('translateFooter.aboutTmbd')}
            </li>
            <li data-test="link-basic">
              {allUtils.transUTL('translateFooter.contactUs')}
            </li>
            <li data-test="link-basic">
              {allUtils.transUTL('translateFooter.supportForums')}
            </li>
            <li data-test="link-basic">
              {allUtils.transUTL('translateFooter.api')}
            </li>
            <li data-test="link-basic">
              {allUtils.transUTL('translateFooter.systemStatus')}
            </li>
          </ul>
        </div>
        <div>
          <h5 data-test="title-involved">
            {allUtils.transUTL('translateFooter.getInvolved')}
          </h5>
          <ul>
            <li data-test="link-involved">
              {allUtils.transUTL('translateFooter.contribution')}
            </li>
            <li data-test="link-involved">
              {allUtils.transUTL('translateFooter.trdParty')}
            </li>
            <li data-test="link-involved">
              {allUtils.transUTL('translateFooter.addNewMovies')}
            </li>
            <li data-test="link-involved">
              {allUtils.transUTL('translateFooter.addNewTvShows')}
            </li>
          </ul>
        </div>
        <div>
          <h5 data-test="title-community">
            {allUtils.transUTL('translateFooter.theCommunity')}
          </h5>
          <ul>
            <li data-test="link-community">
              {allUtils.transUTL('translateFooter.guidelines')}
            </li>
            <li data-test="link-community">
              {allUtils.transUTL('translateFooter.discussions')}
            </li>
            <li data-test="link-community">
              {allUtils.transUTL('translateFooter.leaderboard')}
            </li>
            <li data-test="link-community">
              {allUtils.transUTL('translateFooter.twitter')}
            </li>
          </ul>
        </div>
        <div>
          <h5 data-test="title-legal">
            {allUtils.transUTL('translateFooter.legal')}
          </h5>
          <ul>
            <li data-test="link-legal">
              {allUtils.transUTL('translateFooter.termsOfUse')}
            </li>
            <li data-test="link-legal">
              {allUtils.transUTL('translateFooter.apiTermsOfUse')}
            </li>
            <li data-test="link-legal">
              {allUtils.transUTL('translateFooter.privacyPolicy')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
