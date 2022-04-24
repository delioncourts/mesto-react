function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 

    return (
        <li className="card">
            <button className="card__delete" type="button" aria-label="удалить"></button>
            <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <div className="card__description">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__container">
                    <button className="card__like" type="button" aria-label="нравится"></button>
                    <div className="card__like-count">{props.card.likes.lenght}</div>
                </div>
            </div>
        </li>
    )
}

export default Card;