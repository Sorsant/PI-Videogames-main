import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from '../../../redux/actions';
import validate from './validate';
import { putVG } from '../../../redux/actions';

function FormPut() {
    const dispatch = useDispatch();
    const [put, setPut] = useState({
        id: "",
        name: "",
        description: "",
        genres: "",
        plataformas: "",
        fecha: "",
        rating: "",
        image: "",
    })
    const [errors, setErrors] = useState({
        id: "",
        name: "",
        description: "",
        genres: "",
        plataformas: "",
        fecha: "",
        rating: "",
        image: "",
    })

    const HandleonChange = (event) => {
        setPut({
            ...put,
            [event.target.name]: event.target.value
        })
        setErrors(
            validate({
                ...put, [event.target.name]: event.target.value
            })
        )
    }
    const handleOnSubmit = (event) => {
        event.preventDefault()
        dispatch(putVG(put));
    }

    const renderStars = () => {
        const stars = [];
        const cantidad = parseInt(put.rating)

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
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="">Id de Tu Juego</label><br />
                <input type="number" name="id" placeholder="Id Para Editar" onChange={HandleonChange} /><br />
                {errors.id && <span>{errors.id}</span>}
                <label htmlFor="">Nombre Del Juego</label><br />
                <input type="text" name="name" placeholder="Name" onChange={HandleonChange} /><br />


                <label htmlFor="">Plataforma Del Videojuego</label><br />
                <input type="text" name="plataformas" placeholder="Plataformas" onChange={HandleonChange} /><br />
                {errors.plataformas && <span>{errors.plataformas}</span>}

                <label htmlFor="">Descripcion del Juego</label><br />
                <input type="text" name="description" placeholder="Descripcion" onChange={HandleonChange} /><br />
                {errors.description && <span>{errors.description}</span>}

                <label htmlFor="">Imagen del Juego</label><br />
                <input type="text" name="image" placeholder="Url" onChange={HandleonChange} /><br />
                {errors.image && <span>{errors.image}</span>}

                <label htmlFor="">Fecha del Videojuego</label><br />
                <input type="date" name="fecha" placeholder="Fecha" onChange={HandleonChange} /><br />
                {errors.fecha && <span>{errors.fecha}</span>}

                <label htmlFor="">Rating del Videojuego</label><br />
                <div>{renderStars()}</div>
                <input type="range" name="rating" min="1" max="5" step="0.01" onChange={HandleonChange} /> <span id="ratingValue">Rating:{put.rating} </span><br />
                {errors.rating && <span>{errors.rating}</span>}


                <button disabled={!put.id || errors.id}>Enviar</button>
            </form>
        </div>
    )
}

export default FormPut