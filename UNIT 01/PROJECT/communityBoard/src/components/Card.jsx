const Card = (props) => {
    return (
        <div className="Card">
            <a href={props.link}>
                <img className="recipeImage" src={props.image}></img>
            </a>
            <h3>{props.title}</h3>
            <h4>From {props.author}</h4>
            <a href={props.link}>
                <button>View Recipe</button>
            </a>
        </div>
    )
}

export default Card;