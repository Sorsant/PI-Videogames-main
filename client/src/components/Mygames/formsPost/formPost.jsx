import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from '../../../redux/actions';
import validate from './validate';
import { addVG } from '../../../redux/actions';

function FormPost() {
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.filterGenres)
    const [post, setPost] = useState({
        name: "",
        description: "",
        genres: "",
        plataformas: "",
        fecha: "",
        rating: "",
        image: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        genres: "",
        plataformas: "",
        fecha: "",
        rating: "",
        image: "",
    })
    const HandleonChange = (event) => {

        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
        setErrors(
            validate({
                ...post, [event.target.name]: event.target.value
            })
        )
    }
    const handleOnSubmit = (event) => {
        event.preventDefault()
        dispatch(addVG(post));
    }
    const renderStars = () => {
        const stars = [];
        const cantidad = parseInt(post.rating)

        for (let i = 1; i <= cantidad; i++) {
            if (i <= cantidad) {
                stars.push(<span key={i}>⭐</span>);
            } else {
                stars.push(<span key={i}>⭐</span>);
            }
        }
        return stars;
    };
    useEffect(() => {
        dispatch(getGenres())

    }, [dispatch])

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="">Nombre Del Juego</label><br />
                <input type="text" name="name" placeholder="Name" onChange={HandleonChange} /><br />
                {errors.name && <span>{errors.name}</span>}

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
                <input type="range" name="rating" min="1" max="5" step="0.01" onChange={HandleonChange} /> <span id="ratingValue">Rating:{post.rating} </span><br />

                <div>
                    <label htmlFor="">Genero del Videojuego</label><br />
                    {allGenres?.map((genres) => (
                        <span key={genres}>
                            {genres}
                            <input type="checkbox" name="genres" value={genres} onChange={HandleonChange} />
                        </span>
                    ))}
                    <br />
                    {errors.genres && <span>{errors.genres}</span>}
                </div>

                <button disabled={!post.name || !post.genres || !post.plataformas || !post.fecha || !post.rating || !post.image || !post.description || errors.name || errors.genres || errors.plataformas || errors.fecha || errors.image || errors.description}>Enviar</button>
            </form>
        </div>
    )
}

export default FormPost


