import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootStore } from '../../redux/store/store';

// Actions
import { getDetailsAXN } from '../../redux/actions/details/detailsActions';

// Utilities
import allUtils from '../../utils/allUtils';
import handleCssBackground from './helpers/handleCssBackground';
import { imgURL } from '../../api/init';

interface MediaDetailsProps {}

const MediaDetails: React.FC<MediaDetailsProps> = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const detailsRXS = useSelector((state: RootStore) => state.detailsRXS);
  const width = 'w780';
  const url: string = `${imgURL}/${width}/${detailsRXS?.tv?.poster_path}`;
  const root = document.documentElement;

  const ogDate: any =
    detailsRXS?.tv?.first_air_date || detailsRXS?.tv?.release_date; // TODO: FIX
  const date: Date = new Date(ogDate);
  const year: number = date.getFullYear();
  console.log(detailsRXS);

  // Change background when `tvShows` is updated
  const [bgURL, setBgURL] = React.useState<string>('');
  React.useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Set css variables
    root.style.setProperty(
      '--poster_path-mobile',
      handleCssBackground(detailsRXS?.tv?.poster_path)
    );
    root.style.setProperty(
      '--poster_path-desktop',
      handleCssBackground(detailsRXS?.tv?.backdrop_path)
    );
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
      <div className="details__banner">
        <div className="container details__bg">
          <figure className="details__banner-img">
            <img src={url} alt={detailsRXS?.tv?.name} />
          </figure>
          <div className="details__banner-dec">
            <h3>
              <span>{detailsRXS?.tv?.name || detailsRXS?.tv?.title}</span>{' '}
              <span>({year})</span>
            </h3>
            <p className="details__facts">
              <span className="details__rating">
                {detailsRXS?.tv?.content_rating?.countries[0]?.certification}
              </span> {' '}
              <span className="details__date">
                {detailsRXS?.tv?.release_date} (
                {detailsRXS?.tv?.content_rating?.countries[0]?.iso_3166_1})
              </span>
              {' '}
              {detailsRXS?.tv?.genres.map((item: any) => {
                return <span className="details__genres">{item.name} {' '}</span>;
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MediaDetails;
