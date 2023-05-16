import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getVGDetail } from '../../redux/actions.js'


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const videogameid = useSelector((state) => state.videogameDetail)


    useEffect(() => {
        dispatch(getVGDetail(id))
    }, [id]);


    return (
        <div >
            <div>
                <img src={videogameid?.image} alt={videogameid?.name} />
                <h2>ID: {videogameid?.id}</h2>
                <h2>Nombre: {videogameid?.name}</h2>
                <h2>Platformas: {videogameid?.platforms}</h2>
                <h2>Description: {videogameid?.description}</h2>
                <h2>Genero: {videogameid?.gender}</h2>
                <h2>Fecha: {videogameid?.fecha}</h2>
                <h2>Rating: {videogameid?.rating}</h2>

            </div>

        </div>
    )
}

export default Detail;