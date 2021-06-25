import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const promise = isLiked ? api.deleteLike(card._id) : api.addLike(card._id);

    promise.then((newCard) => {
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></div>
          <div className="profile__avatar-layout" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__profile-into">
          <div className="profile__wrap">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
