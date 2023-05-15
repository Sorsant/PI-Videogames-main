import { Link } from "react-router-dom";
import style from './card.module.css'
function Card({ id, name, rating, genres, image }) {


    return (
        <div className={style.cardcontainer}>
            <Link to={`/Detail/${id}`}><h2>{name}</h2></Link>
            <img src={image} alt={name} />
            <h2>Genero:{genres}</h2>
            <h4>ID:{id}</h4>
            <h4>Rating:⭐{rating}</h4>

        </div>
    );


}
export default Card;