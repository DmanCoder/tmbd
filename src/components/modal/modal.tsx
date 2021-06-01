import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player/youtube';

// Redux type
import { RootStore } from '../../redux/store/store';

// Actions
import { modalToggleAXN } from '../../redux/actions/modal/modalActions';
import helpers from './helpers';

const Modal: React.FC<any> = () => {
  const dispatch = useDispatch();
  const modalRXS = useSelector((state: RootStore) => state.modalRXS);

  const { results } = modalRXS.trailers;

  const modal = React.useRef(null);

  React.useEffect(() => {
    helpers.onToggleModal(modalRXS.isOpen, modal);
  }, [modalRXS.isOpen]);

  // Close modal
  const onModal = () => dispatch(modalToggleAXN(!modalRXS.isOpen));

  const url = `https://www.youtube.com/watch?v=${results && results[0]?.key}`;

  return (
    <div
      data-test="modal-component"
      ref={modal}
      onClick={onModal}
      className="modal"
    >
      <div className="wrapper">
        {modalRXS.isOpen && (
          <ReactPlayer
            className="modal__player"
            url={url}
            playing={modalRXS.isOpen} // When true start video || When false pause video
            controls={true}
            width="70%"
            height="70%"
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
