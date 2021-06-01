import React from 'react';

// Utilities
import allUtils from '../../utils/allUtils';

interface PageNotFoundProps {}

const PageNotFound: React.FC<PageNotFoundProps> = ({}) => {
  return (
    <div data-test="page-not-found-component" className="not-found">
      <h3>{allUtils.transUTL('translatePageNotFound.header')}</h3>
      <p>{allUtils.transUTL('translatePageNotFound.para')}</p>
    </div>
  );
};
export default PageNotFound;
