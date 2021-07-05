import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const { isOpen, onClose } = props;
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function editName(e) {
    setName(e.target.value);
  }

  function editDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          className="popup__field popup__field_type_name"
          type="text"
          id="userName-input"
          name="username"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={editName}
        />
        <span className="userName-input-error popup__field-error"></span>
        <input
          className="popup__field popup__field_type_description"
          type="text"
          id="description-input"
          name="profession"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={editDescription}
        />
        <span
          className="description-input-error popup__field-error"
          disabled
        ></span>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
