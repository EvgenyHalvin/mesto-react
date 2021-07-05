import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose } = props;

  const [placeName, setPlaceName] = React.useState("");
  const [placeLink, setPlaceLink] = React.useState("");

  function handleChangeNamePlace(e) {
    setPlaceName(e.target.value);
  }

  function handleChangeLinkPlace(e) {
    setPlaceLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: placeName,
      link: placeLink,
    });

    setPlaceName('');
    setPlaceLink('');
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Добавить"
    >
        <input
          className="popup__field popup__field_type_place"
          type="text"
          id="placeName-input"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={placeName}
          onChange={handleChangeNamePlace}
          required
        />
        <span className="placeName-input-error popup__field-error"></span>
        <input
          className="popup__field popup__field_type_link-to-img"
          type="url"
          id="linkPlace-input"
          name="link"
          placeholder="Ссылка на картинку"
          value={placeLink}
          onChange={handleChangeLinkPlace}
          required
        />
        <span className="linkPlace-input-error popup__field-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
