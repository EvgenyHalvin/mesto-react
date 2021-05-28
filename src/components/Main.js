import React from "react";
import Api from "../utils/api";
import {configApi} from '../utils/constants.js';
import Card from "./Card";

const api = new Api(configApi);

function Main(props) {
  const {onEditAvatar,onEditProfile,onAddPlace,onCardClick} = props;

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()]).then(
      ([userData, cardsData]) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setCards(cardsData);
      }
    )
    .catch((err) => {
      console.log(err)
    })
  },[]);

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
            onClick={onEditAvatar}
          ></div>
        </div>
        <div className="profile__profile-into">
          <div className="profile__wrap">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
