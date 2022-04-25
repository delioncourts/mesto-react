//import './App.css';
import React from 'react';
//import Card from '../Card';
import Footer from '../Footer';
import Header from '../Header';
import ImagePopup from '../ImagePopup';
import Main from '../Main';
import PopupWithForm from '../PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setOpenEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setOpenAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setOpenEditAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImageOpen, setImageOpen] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
    setImageOpen(true);
  }

  function handleEditAvatarClick() {
    setOpenEditAvatar(true);
  }

  function handleEditProfileClick() {
    setOpenEditProfile(true);
  }

  function handleAddPlaceClick() {
    setOpenAddPlace(true);
  }

  function closeAllPopups() {
    setOpenEditAvatar(false);
    setOpenEditProfile(false);
    setOpenAddPlace(false);
    setImageOpen(false);
  }

  return (<div>
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
    </div>

    <PopupWithForm name="edit-profile" title="Редактировать профиль" button="Сохранить"
      isOpen={isEditProfilePopupOpen}
      onEditProfile={handleEditProfileClick}
      onClose={closeAllPopups}>
      <input type="text" name="name" className="popup__input" id="name" minLength="2" maxLength="40" placeholder="Имя"
        required />
      <span id="name-error" className="popup__error" />
      <input type="text" className="popup__input" id="about"
        name="about" minLength="2" placeholder="Описание"
        maxLength="200" required />
      <span id="about-error" className="popup__error" /> </PopupWithForm>

    <PopupWithForm name="edit-avatar" title="Обновить Аватар" button="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      openEditAvatar={handleEditAvatarClick}
      onClose={closeAllPopups}>
      <input type="url" name="avatar" className="popup__input" id="avatar" 
        placeholder="Ссылка на аватар" required />
      <span id="avatar-error" className="popup__error" />
    </PopupWithForm>

    <PopupWithForm name="add-place" title="Новое место" button="Создать"
      isOpen={isAddPlacePopupOpen}
      openAddPlace={handleAddPlaceClick}
      onClose={closeAllPopups}>
      <input required type="text" name="name" className="popup__input" id="cardtitle"
        placeholder="Название" minLength="2" maxLength="30" />
      <span id="cardtitle-error" className="popup__error" />
      <input required type="url" name="cardlink" className="popup__input" id="link"
        placeholder="Ссылка на картинку" />
      <span id="link-error" className="popup__error" /> </PopupWithForm>

    <PopupWithForm name="delete-confirm" title="Вы уверены?" button="Да" onClose={closeAllPopups} />

    <ImagePopup name="photo"
      onClose={closeAllPopups}
      isOpen={isImageOpen}
      card={selectedCard} />
  </div>
  );
}

export default App;
