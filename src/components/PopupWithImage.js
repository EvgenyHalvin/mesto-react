import React from 'react';

function PopupWithImage() {
  return (
    <div className="popup popup_type_show-image">
      <div className="popup__container popup__container_show-image">
        <button type="button" className="popup__close-icon"></button>
        <img src="#" alt="#" className="popup__image" />
        <p className="popup__title popup__title_show-image"></p>
      </div>
    </div>
  )
};

export default PopupWithImage;