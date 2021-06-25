import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__remove ${
    isOwn ? `element__remove_visible` : `element__remove_hidden`
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? `element__like_active` : ``
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="element">
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <img
        onClick={handleClick}
        src={props.card.link}
        className="element__image"
        alt={props.card.name}
      />
      <div className="element__description">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-area">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <div className="element__like-counter">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
