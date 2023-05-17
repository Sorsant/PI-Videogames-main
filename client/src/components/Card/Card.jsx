import { Link } from "react-router-dom";
import style from './card.module.css'
function Card({ id, name, rating, genres, image }) {
    const renderStars = () => {
        const stars = [];
        const cantidad = parseInt(rating)

        for (let i = 1; i <= cantidad; i++) {
            if (i <= cantidad) {
                stars.push(<span key={i}>⭐</span>);
            } else {
                stars.push(<span key={i}>⭐</span>);
            }
        }
        return stars;
    };

    return (
        <div key={id} className={style.cardcontainer}>
            <Link to={`/HomePage/${id}`}><h2>{name}</h2></Link>
            <img src={image} alt="" />
            <h2>Genero:{genres}</h2>
            <h4>ID:{id}</h4>
            <h4>Rating:{renderStars()}{rating}</h4>

        </div>
    );


}
export default Card;