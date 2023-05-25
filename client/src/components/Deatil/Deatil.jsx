import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getVGDetail } from '../../redux/actions.js'
import style from './detail.module.css'


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const videogameid = useSelector((state) => state.videogameDetail)

    const num = videogameid?.rating
    useEffect(() => {
        dispatch(getVGDetail(id))
    }, [id]);

    const renderStars = () => {
        const stars = [];
        const cantidad = parseInt(num)

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
        <div>
            <div className={style.contenedorDetail}>
                <div className={style.imgconteiner}>
                    <h1 className={style.IdH4}>ID: {videogameid?.id}</h1>
                    <img src={videogameid?.image} alt={videogameid?.name} />
                    <h1 className={style.title}>{videogameid?.name}</h1>
                </div>
                <span>Género:  </span>
                <h2>  {videogameid?.genres}</h2>
                <div>

                </div>
                <span>Descripción: </span>
                <span>{videogameid?.description}</span>

                <span>Plataformas: </span>
                <span>{videogameid?.platforms} </span>

                <span>Fecha: </span>

                <span> {videogameid?.fecha}</span>
                <span>Rating:</span>
                <span>  {videogameid?.rating} </span>

                <div>{renderStars()}</div>
            </div>
        </div>
    )
}

export default Detail;