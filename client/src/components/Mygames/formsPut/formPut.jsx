import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from '../../../redux/actions';
import validate from './validate';
import { putVG } from '../../../redux/actions';
import style from '../formsPost/formp.module.css'

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
        alert("El Juego a sido Editado!")
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
                <p className={style.title}>Edita Tu Game </p>
                <label htmlFor="">Id de Tu Juego</label>
                <input className={style.inputss} type="number" name="id" placeholder="Id Para Editar" autocomplete="off" onChange={HandleonChange} />
                {errors.id && <span className={style.spans}>{errors.id}</span>}
                <label htmlFor="">Nombre Del Juego</label>
                <input className={style.inputss} type="text" name="name" placeholder="Name" autocomplete="off" onChange={HandleonChange} />


                <label htmlFor="">Plataforma Del Videojuego</label>
                <input className={style.inputss} type="text" name="plataformas" placeholder="Plataformas" autocomplete="off" onChange={HandleonChange} />
                {errors.plataformas && <span className={style.spans}>{errors.plataformas}</span>}

                <label htmlFor="">Descripcion del Juego</label>
                <input className={style.inputss} type="text" name="description" placeholder="Descripcion" autocomplete="off" onChange={HandleonChange} />
                {errors.description && <span className={style.spans}>{errors.description}</span>}

                <label htmlFor="">Imagen del Juego</label>
                <input className={style.inputss} type="text" name="image" placeholder="Url" autocomplete="off" onChange={HandleonChange} />
                {errors.image && <span className={style.spans}>{errors.image}</span>}

                <label htmlFor="">Fecha del Videojuego</label>
                <input className={style.inputss} type="date" name="fecha" placeholder="Fecha" autocomplete="off" onChange={HandleonChange} />
                {errors.fecha && <span className={style.spans}>{errors.fecha}</span>}

                <label htmlFor="">Rating del Videojuego</label>
                <div>{renderStars()}</div>
                <input className={style.inputss} type="range" name="rating" min="1" max="5" step="0.01" onChange={HandleonChange} /> <span className={style.spans} id="ratingValue">Rating:{put.rating} </span>
                {errors.rating && <span className={style.spans}>{errors.rating}</span>}


                <button className={style.button_env} disabled={!put.id || errors.id}>Enviar</button>
            </form>
        </div>
    )
}

export default FormPut