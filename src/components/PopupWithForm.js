import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-icon"
          onClick={props.onClose}
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <form name="popupForm" className={`popup__form popup__form_type_${props.name}`} novalidate>
          <fieldset className="popup__set">
            {props.children}
            <button type="submit" name="save" className="popup__submit-button">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;