import React from 'react';
import Card from './Card';
import api from '../utils/Api'

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getProfile()
            .then(profile => {
                setUserName(profile.name);
                setUserDescription(profile.about);
                setUserAvatar(profile.avatar);
            })
            .catch(error => 
                console.log(error));
    }, []);


    React.useEffect(() => {
        api.getInitialCards()
            .then(setCards)
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <div style={{ backgroundImage: `url(${userAvatar})` }} alt="фотография профиля" className="profile__avatar"></ div>
                <button onClick={props.onsetUserAvatar} type="button" className="profile__edit"></button>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__title">{userName}</h1>
                        <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="редактировать"></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button onClick={props.onAddPlace} className="profile__add-button" type="button" aria-label="добавить"></button>
            </section>

            <section className="cards">
                <ul className="cards__grid">
                    {cards.map(card => (
                        <Card
                            card={card}
                            onCardClick={props.onCardClick}
                            name={card.name}
                            link={card.link}
                            likes={card.likes}
                            key={card._id} />))}
                </ul>
            </section>

        </main>
    )

}

export default Main;

//userName

//userDescription

//userAvatar

//style={{ backgroundImage: `url(${userAvatar})` }} 