import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <div className="page">
        <div className="page__wrap-for-sticky-footer">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
        </div>
        <Footer />
      </div>

      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span
            className="description-input-error popup__field-error"
            disabled
          ></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            className="popup__field popup__field_type_place"
            type="text"
            id="placeName-input"
            name="name"
            defaultValue=""
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="placeName-input-error popup__field-error"></span>
          <input
            className="popup__field popup__field_type_link-to-img"
            type="url"
            id="linkPlace-input"
            name="link"
            defaultValue=""
            placeholder="Ссылка на картинку"
            required
          />
          <span className="linkPlace-input-error popup__field-error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__field popup__field_type_link-to-img"
          type="url"
          id="linkAvatar-input"
          name="link"
          defaultValue=""
          placeholder="Ссылка на картинку"
          required
        />
        <span className="linkAvatar-input-error popup__field-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
