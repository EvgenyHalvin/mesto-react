import React from 'react';

function ImagePopup(props) {
  return (                                                 
    <div className={`popup popup_type_show-image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_show-image">
        <button onClick={props.onClose} type="button" className="popup__close-icon"></button>
        <img src={props.card && props.card.link} alt={props.card && props.card.name} className="popup__image" />
        <p className="popup__title popup__title_show-image">{props.card && props.card.name}</p>
      </div>
    </div>
  )
};

export default ImagePopup;