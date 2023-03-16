import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ImageWrapper } from 'components/Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ item, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', habdleEscPress);

    return () => {
      window.removeEventListener('keydown', habdleEscPress);
    };
  });

  const habdleEscPress = ({ code }) => {
    if (code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  const { largeImageURL, tags } = item;

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ImageWrapper>
        <img src={largeImageURL} alt={tags} />
      </ImageWrapper>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
