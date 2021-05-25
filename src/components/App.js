import React from 'react';
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithConfirm from './PopupWithConfirm';
import PopupWithImage from './PopupWithImage';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <div className="wrap-for-sticky-footer">
          <Header />
          < Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
          />
        </div>
        <Footer />
      </div>

      <PopupWithForm title="Редактировать профиль" name="edit"
        children={
          <>
            <input className="popup__field popup__field_type_name" type="text" id="userName-input" name="username"
              placeholder="Имя" minlength="2" maxlength="40" required />
            <span className="userName-input-error popup__field-error"></span>
            <input className="popup__field popup__field_type_description" type="text" id="description-input"
              name="profession" placeholder="О себе" minlength="2" maxlength="200" required />
            <span className="description-input-error popup__field-error" disabled></span></>
        } isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

      <PopupWithForm title="Новое место" name="add-card" children={
        <>
          <input className="popup__field popup__field_type_place" type="text"
            id="placeName-input" name="name" value=""
            placeholder="Название" minlength="2" maxlength="30" required />
          <span className="placeName-input-error popup__field-error"></span>
          <input className="popup__field popup__field_type_link-to-img" type="url"
            id="linkPlace-input" name="link" value=""
            placeholder="Ссылка на картинку" required />
          <span className="linkPlace-input-error popup__field-error"></span></>
      } isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <PopupWithForm title="Обновить аватар" name="avatar" children={
        <>
          <input className="popup__field popup__field_type_link-to-img" type="url"
            id="linkAvatar-input" name="link" value=""
            placeholder="Ссылка на картинку" required />
          <span className="linkAvatar-input-error popup__field-error"></span></>
      } isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

      <PopupWithConfirm />
      <PopupWithImage />

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form name="popupForm" className="popup__form popup__form_type_edit" novalidate>
            <fieldset className="popup__set">
              <input className="popup__field popup__field_type_name" type="text" id="userName-input" name="username"
                placeholder="Имя" minlength="2" maxlength="40" required />
              <span className="userName-input-error popup__field-error"></span>
              <input className="popup__field popup__field_type_description" type="text" id="description-input"
                name="profession" placeholder="О себе" minlength="2" maxlength="200" required />
              <span className="description-input-error popup__field-error" disabled></span>
              <button type="submit" name="save" className="popup__submit-button">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">Новое место</h3>
          <form name="popupForm" className="popup__form popup__form_add-card" novalidate>
            <fieldset className="popup__set">
              <input className="popup__field popup__field_type_place" type="text"
                id="placeName-input" name="name" value=""
                placeholder="Название" minlength="2" maxlength="30" required />
              <span className="placeName-input-error popup__field-error"></span>
              <input className="popup__field popup__field_type_link-to-img" type="url"
                id="linkPlace-input" name="link" value=""
                placeholder="Ссылка на картинку" required />
              <span className="linkPlace-input-error popup__field-error"></span>
              <button type="submit" name="save" className="popup__submit-button">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_show-image">
        <div className="popup__container popup__container_show-image">
          <button type="button" className="popup__close-icon"></button>
          <img src="#" alt="#" className="popup__image" />
          <p className="popup__title popup__title_show-image"></p>
        </div>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
          <button type="button" name="confirm" className="popup__submit-button popup__submit-button_confirm">Да</button>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form name="popupForm" className="popup__form popup__form_avatar" novalidate>
            <fieldset className="popup__set">
              <input className="popup__field popup__field_type_link-to-img" type="url"
                id="linkAvatar-input" name="link" value=""
                placeholder="Ссылка на картинку" required />
              <span className="linkAvatar-input-error popup__field-error"></span>
              <button type="submit" name="save" className="popup__submit-button">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <template id="card">
        <div className="element">
          <button className="element__remove"></button>
          <img src="#" className="element__image" alt="#" />
          <div className="element__description">
            <h2 className="element__name"></h2>
            <div className="element__like-area">
              <button type="button" className="element__like"></button>
              <div className="element__like-counter"></div>
            </div>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
