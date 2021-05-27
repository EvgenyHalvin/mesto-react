import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setuserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()]).then(
      ([data, res]) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setuserDescription(data.about);
        setCards(res);
      }
    );
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          <div
            className="profile__avatar-layout"
            onClick={props.onEditAvatar}
          ></div>
        </div>
        <div className="profile__profile-into">
          <div className="profile__wrap">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
