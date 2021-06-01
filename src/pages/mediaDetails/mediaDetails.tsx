import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootStore } from '../../redux/store/store';

// Actions
import { getDetailsAXN } from '../../redux/actions/details/detailsActions';

// Utilities
import allUtils from '../../utils/allUtils';
import handleCssBackground from '../../components/banner/helpers/handleCssBackground';

interface MediaDetailsProps {}

const MediaDetails: React.FC<MediaDetailsProps> = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const detailsRXS = useSelector((state: RootStore) => state.detailsRXS);
  console.log(detailsRXS)

  // Change background when `tvShows` is updated
  const [bgURL, setBgURL] = React.useState<string>('');
  React.useEffect(() => {
    // CSS background inline styles
    const bgURL = handleCssBackground(detailsRXS?.tv?.backdrop_path);
    setBgURL(bgURL);
  }, [detailsRXS]);

  React.useEffect(() => {
    const media = JSON.parse(sessionStorage.getItem('media') || '');
    if (media) {
      dispatch(getDetailsAXN(media.type, media.id, history));
    } else {
      history.push('/');
    }
  }, []);

  return (
    <div data-test="media-details" className="details">
      <div
        className="details__banner"
        style={{
          background: bgURL,
        }}
      ></div>
    </div>
  );
};
export default MediaDetails;
