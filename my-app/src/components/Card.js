import React from 'react';

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="card">
            <button className="card__delete" type="button" aria-label="удалить"></button>
            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__description">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__container">
                    <button className="card__like" type="button" aria-label="нравится"></button>
                    <div className="card__like-count">{card.likes.lenght}</div>
                </div>
            </div>
        </li>
    )
}

export default Card;