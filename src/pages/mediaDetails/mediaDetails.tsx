import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PlayArrow, ArrowForward } from '@material-ui/icons';

import { RootStore } from '../../redux/store/store';

// Actions
import { getDetailsAXN } from '../../redux/actions/details/detailsActions';

// Assets

// Component
import Profile from '../../components/profile/profile';

// Utilities
import allUtils from '../../utils/allUtils';
import handleCssBackground from './helpers/handleCssBackground';
import { imgURL } from '../../api/init';
import Rating from '../../components/rating/rating';
import isEmptyUTL from '../../utils/isEmptyUTL';
import { CreditCast } from '../../redux/actions/details/detailsActionsTypes';
import Recommendations from '../../components/recommendations/recommendations';
import {
  modalSetTrailerAXN,
  modalToggleAXN,
} from '../../redux/actions/modal/modalActions';

interface MediaDetailsProps {}

const MediaDetails: React.FC<MediaDetailsProps> = ({}) => {
  const dispatch = useDispatch();

  const detailsRXS = useSelector((state: RootStore) => state.detailsRXS);
  const modalRXS = useSelector((state: RootStore) => state.modalRXS);
  const width = 'w780';
  const url: string = `${imgURL}/${width}/${detailsRXS?.poster_path}`;
  const root = document.documentElement;

  const ogDate: any = detailsRXS?.first_air_date || detailsRXS?.release_date; // TODO: FIX
  const date: Date = new Date(ogDate);
  const year: number = date.getFullYear();
  const score: number = detailsRXS?.vote_average * 10;

  // Change background when `tvShows` is updated
  const [bgURL, setBgURL] = React.useState<string>('');
  React.useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // CSS background inline styles
    //  detailsRXS?.poster_path
    const bgURL = handleCssBackground(detailsRXS?.backdrop_path);
    setBgURL(bgURL);
  }, [detailsRXS]);

  // open modal
  const onModal = () => {
    dispatch(modalSetTrailerAXN(detailsRXS.trailers));
    dispatch(modalToggleAXN(!modalRXS.isOpen));
  };

  return (
    <div data-test="media-details" className="details">
      <div
        style={{
          background: bgURL,
        }}
        className="details__banner"
      >
        <div className="container details__bg">
          <figure className="details__banner-img">
            <img src={url} alt={detailsRXS?.name} />
          </figure>
          <div className="details__banner-dec">
            <h3>
              <span>{detailsRXS?.name || detailsRXS?.title}</span>{' '}
              <span>({year})</span>
            </h3>
            <p className="details__facts">
              <span className="details__rating">
                {detailsRXS?.content_rating?.certificate || 'N/A'}
              </span>{' '}
              <span className="details__date">
                {detailsRXS?.release_date} (
                {detailsRXS?.content_rating?.iso_3166_1 || 'N/A'})
              </span>{' '}
              {detailsRXS?.genres.map((item: any) => {
                return (
                  <span key={item.name} className="details__genres">
                    {item?.name}{' '}
                  </span>
                );
              })}
            </p>

            <div className="details__actions">
              <div className="details__score">
                <Rating score={score} />
                <p>{allUtils.transUTL('translateDetails.userScore')}</p>

                <div>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button onClick={onModal}>
                    <PlayArrow />
                    {allUtils.transUTL('translateDetails.playTrailer')}
                  </button>
                </div>
              </div>

              <p className="details__tagline">{detailsRXS?.tagline}</p>

              <h5 className="details__overview-title">
                {allUtils.transUTL('translateDetails.overview')}
              </h5>
              <p className="details__overview-dec">{detailsRXS?.overview}</p>

              {!allUtils.isEmptyUTL(detailsRXS?.created_by) && (
                <p className="details__creators">
                  <span>Creators:</span>{' '}
                  {detailsRXS?.created_by
                    .map((item: any) => item?.name)
                    .join(', ') || 'N/A'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="details__cast-ctn container">
        <h3>{allUtils.transUTL('translateDetails.seriesCast')}</h3>

        <div className="details__cast">
          {detailsRXS?.cast_credit?.cast
            .slice(0, 12)
            .map((credit: CreditCast, index: number) => {
              return (
                <Profile
                  keyID={index}
                  name={credit.name}
                  profile={credit.profile_path}
                  gender={credit.gender}
                  character={credit.character}
                />
              );
            })}
        </div>
        <a className="details__crew">
          <span>{allUtils.transUTL('translateDetails.cast')}</span>{' '}
          <ArrowForward />
        </a>
      </div>

      {!allUtils.isEmptyUTL(detailsRXS?.recommendations?.results) && (
        <div className="details__rec-ctn container">
          <h3>{allUtils.transUTL('translateDetails.rec')}</h3>

          <div className="details__other-rec">
            {detailsRXS?.recommendations?.results
              .slice(0, 12)
              .map((rec: any, index: number) => {
                return (
                  <Recommendations
                    keyID={index}
                    name={rec.name || rec.title}
                    backdrop={rec.backdrop_path}
                    voteAverage={rec.vote_average}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
export default MediaDetails;
