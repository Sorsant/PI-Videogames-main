import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from '../../../redux/actions';
import validate from './validate';
import { addVG } from '../../../redux/actions';
import style from '/home/bansant/MisCursos/Curso_Henry/PI-Videogames-main/client/src/components/Mygames/formsPost/Frompost.module.css'

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
        if (event.target.name === "genres") {
            if (post.genres.includes(event.target.value)) {
                const filtrado = post.genres
                    .split(", ")
                    .filter(item => item !== event.target.value)
                    .join(", ");
                setPost({ ...post, genres: filtrado });
            } else {
                setPost({
                    ...post,
                    genres: [...post.genres.split(", "), event.target.value].join(", "),
                });
            }
        } else {
            setPost({
                ...post,
                [event.target.name]: event.target.value,
            });
        }
        setErrors(
            validate({
                ...post,
                [event.target.name]: event.target.value,
            })
        );
    };
    const handleOnSubmit = (event) => {
        event.preventDefault()
        dispatch(addVG(post));
        alert("El Juego a sido creado!")
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
                <p className={style.title}>Crea Tu Game </p>
                <label htmlFor="">Nombre Del Juego</label>
                <input className={style.inputss} type="text" name="name" autocomplete="off" placeholder="Name" onChange={HandleonChange} />
                {errors.name && <span className={style.spans}>{errors.name}</span>}

                <label htmlFor="">Plataforma Del Videojuego</label>
                <input className={style.inputss} type="text" name="plataformas" autocomplete="off" placeholder="Plataformas" onChange={HandleonChange} />
                {errors.plataformas && <span className={style.spans}>{errors.plataformas}</span>}

                <label htmlFor="">Descripcion del Juego</label>
                <input className={style.inputss} type="text" name="description" autocomplete="off" placeholder="Descripcion" onChange={HandleonChange} />
                {errors.description && <span className={style.spans}>{errors.description}</span>}

                <label htmlFor="">Imagen del Juego</label>
                <input className={style.inputss} type="text" name="image" autocomplete="off" placeholder="Url" onChange={HandleonChange} />
                {errors.image && <span className={style.spans}>{errors.image}</span>}

                <label htmlFor="">Fecha del Videojuego</label>
                <input className={style.inputss} type="date" name="fecha" autocomplete="off" placeholder="Fecha" onChange={HandleonChange} />
                {errors.fecha && <span className={style.spans}>{errors.fecha}</span>}

                <label htmlFor="">Rating del Videojuego</label>
                <div>{renderStars()}</div>
                <input className={style.inputss} type="range" autocomplete="off" name="rating" min="1" max="5" step="0.01" onChange={HandleonChange} /> <span className={style.spans} id="ratingValue">Rating: {post.rating} </span>

                <label htmlFor="">Genero del Videojuego</label> <br />

                <div className={style.content} style={{ display: 'flex', flexWrap: 'wrap' }}>

                    {allGenres?.map((genres) => (
                        <span className={style.spans} style={{ flexBasis: '30%', marginBottom: '1px' }} key={genres}>
                            {genres}
                            <input type="checkbox" className={style.checkbox} name="genres" value={genres} onChange={HandleonChange} />
                        </span>

                    ))}
                </div>

                <button className={style.button_env} disabled={!post.name || !post.genres || !post.plataformas || !post.fecha || !post.rating || !post.image || !post.description || errors.name || errors.genres || errors.plataformas || errors.fecha || errors.image || errors.description}>Enviar</button>
            </form>
        </div>
    )
}

export default FormPost


