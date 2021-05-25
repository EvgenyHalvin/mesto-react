import React from 'react';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <div className="profile__avatar"></div>
          <div className="profile__avatar-layout" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__profile-into">
          <div className="profile__wrap">
            <h1 className="profile__name">Жданов Евгений</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description">Познающий мир</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;