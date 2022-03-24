import "./Card.css";
const Card = ({ color, title, text1, text2, text3 }) => {
    return (
        <div className={color}>
            <h2>{title}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
        </div>
    )
}

export default Card