import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  modalSetTrailerAXN,
  modalToggleAXN,
} from '../../redux/actions/modal/modalActions';
import { RootStore } from '../../redux/store/store';

// Init
import { imgURL } from '../../api/init';

// Assets
import { ReactComponent as PlaySVG } from '../../assets/icons/play.svg';

// Component
import Bar from '../graph/bar/bar';

// Helpers
import helpers from './helpers';

const Trailers: React.FC<any> = ({ db, title, isGraph }) => {
  const dispatch = useDispatch();
  const modalRXS = useSelector((state: RootStore) => state.modalRXS);
  const trailer = React.useRef(null);

  // Change background when `db` is updated
  const [bgURL, setBgURL] = React.useState<string>('');
  React.useEffect(() => {
    const tvIndex: number = 0;
    const tvBanner = db[tvIndex];

    // CSS background inline styles
    const bgURL = helpers.onChangeBackground(tvBanner?.backdrop_path);
    setBgURL(bgURL);
  }, [db]);

  // open modal
  const onModal = (show: any) => {
    dispatch(modalSetTrailerAXN(show.trailers));
    dispatch(modalToggleAXN(!modalRXS.isOpen));
  };

  // TODO: Implement drag - https://greensock.com/forums/topic/19730-horizontal-scroll-with-mouse-using-draggable/
  return (
    <div data-test="trailers-component" className="trailers">
      <div
        ref={trailer}
        style={{
          background: bgURL,
        }}
        className="trailers__bg"
      ></div>

      <header className="trailers__header">
        <h4 data-test="title">{title}</h4>
        <div>test</div>
      </header>

      {isGraph && <Bar />}

      <div className="trailers__content">
        {db.map((show: any) => {
          // Creating URL img reference
          const width: string = 'w500';
          const url: string = `${imgURL}/${width}/${show.backdrop_path}`;

          return (
            <div
              data-test="thumbnail"
              key={show.id}
              className="trailers__thumbnail"
            >
              <figure>
                <img
                  data-test="thumbnail-img"
                  onClick={() => onModal(show)}
                  onMouseEnter={() =>
                    helpers.onMouseEnter(trailer, show.backdrop_path)
                  }
                  src={url}
                  alt={show.name || show.original_title || show.original_title}
                />
                <PlaySVG />
                <figcaption>
                  <h5 data-test="thumbnail-title">
                    {show.name || show.original_title || show.original_title}
                  </h5>
                  <p data-test="thumbnail-date">
                    {show?.trailers?.results[0]?.name}
                  </p>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Trailers.defaultProps = {
  db: [],
  isGraph: false,
};

export default Trailers;
