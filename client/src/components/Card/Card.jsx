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
        <Link to={`/HomePage/${id}`}>
            <div key={id} className={style.cd_card} style={{
                backgroundImage: `url(${image})`,
                backgroundSize: '200%', // Ajusta el tamaño de la imagen al 80% del contenedor
                backgroundPosition: 'center',
                backgroundSize: 'cover' // Centra la imagen en el contenedor
            }}>
                <div className={style.cd}>
                    <div className={style.cd_hole}></div>
                    <div className={style.cd_label}></div>
                </div>
                <div className={`${style.cd_content}`}>
                    {/* <img src={image} alt="" className={style.cd_image} /> */}
                    <h3 className={style.h2style}>{name}</h3>
                    <h4>{genres}</h4>
                    <h4>ID: {id}</h4>
                    <h4>Rating: {renderStars()}{rating}</h4>
                </div>
            </div>
        </Link>
    );

}
export default Card;