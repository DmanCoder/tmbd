import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootStore } from '../../redux/store/store';
// Init
import { imgURL } from '../../api/init';

// Types
import { IGalleryProps } from './galleryTypes';

// Rating component
import Rating from '../rating/rating';
import Bar from '../graph/bar/bar';
import allUtils from '../../utils/allUtils';
import { getDetailsAXN } from '../../redux/actions/details/detailsActions';

const Gallery: React.FC<IGalleryProps> = ({ db, title, isGraph }) => {
  const dispatch = useDispatch();
  const detailsRXS = useSelector((state: RootStore) => state.detailsRXS);
  const history = useHistory();

  React.useEffect(() => {
    //note: this uses DrawSVGPlugin which you can read about at https://greensock.com/drawSVG/
  }, []);

  const onClick = (show: any) => {
    console.log(show)
    console.log(show.media_type, show.id, history)
    dispatch(getDetailsAXN(show.media_type, show.id, history))
  };

  // TODO: Implement drag - https://greensock.com/forums/topic/19730-horizontal-scroll-with-mouse-using-draggable/
  return (
    <div data-test="gallery-component" className="gallery">
      <header className="gallery__header">
        <h4 data-test="title">{title}</h4>
        <div>test</div>
      </header>

      {isGraph && <Bar />}

      <div className="gallery__content">
        {db.map((show) => {
          // Creating URL img reference
          const width: string = 'w500';
          const url: string = `${imgURL}/${width}/${show.poster_path}`;

          // Constructing the desired date string
          // Constructing the desired date string
          const ogDate: any = show.first_air_date || show.release_date; // TODO: FIX
          const date: Date = new Date(ogDate);
          const year: number = date.getFullYear();
          const month: number = date.getMonth();
          const day: number = date.getDay();
          const dateString: string = `${allUtils.monthsUTL[month]} ${
            day + 1
          }, ${year}`;

          const score: number = show.vote_average * 10;

          return (
            <div
              data-test="thumbnail"
              key={show.id}
              className="gallery__thumbnail"
            >
              <figure>
                <img
                  data-test="thumbnail-img"
                  src={url}
                  alt={show.name || show.title || show.original_title}
                  onClick={() => onClick(show)}
                />
                <Rating score={score} />
                <figcaption>
                  <h5 data-test="thumbnail-title">
                    {show.name || show.title || show.original_title}
                  </h5>
                  <p data-test="thumbnail-date">{dateString}</p>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Gallery.defaultProps = {
  db: [],
  isGraph: false,
};

export default Gallery;
