import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button className="element__remove"></button>
      <img
        onClick={handleClick}
        src={props.card.link}
        className="element__image"
        alt={props.card.name}
      />
      <div className="element__description">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-area">
          <button type="button" className="element__like"></button>
          <div className="element__like-counter">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
