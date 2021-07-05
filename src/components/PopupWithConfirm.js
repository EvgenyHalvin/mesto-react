import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithConfirm(props) {
  return (
    <div className="popup popup_type_confirm">
      <div className="popup__container">
        <button type="button" className="popup__close-icon"></button>
        <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
        <button
          type="button"
          name="confirm"
          className="popup__submit-button popup__submit-button_confirm"
        >
          Да
        </button>
      </div>
    </div>
  );
}

export default PopupWithConfirm;
