import React from 'react';

// GSAP config
import gsap from '../../animations/gsapConfig';

/**
 * @dec Toggle modal
 * @param {boolean} isOpen - toggles boolean true || false
 * @param {MutableRefObject} modal - div ref
 */
const onToggleModal = (
  isOpen: boolean,
  modal: React.MutableRefObject<null>
) => {
  const modalTL = gsap.timeline();
  if (isOpen) {
    modalTL.set(modal.current, {
      autoAlpha: 1,
      css: { display: 'block', zIndex: 130 },
    });
  } else {
    modalTL.set(modal.current, {
      autoAlpha: 0,
      css: { display: 'none' },
    });
  }
};

const helpers = {
  onToggleModal,
};

export default helpers;
