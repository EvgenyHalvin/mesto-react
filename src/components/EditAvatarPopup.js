import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { isOpen, onClose } = props;
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__field popup__field_type_link-to-img"
        type="url"
        id="linkAvatar-input"
        name="link"
        defaultValue=""
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="linkAvatar-input-error popup__field-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
