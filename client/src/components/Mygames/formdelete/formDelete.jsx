import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux"
import style from '/home/bansant/MisCursos/Curso_Henry/PI-Videogames-main/client/src/components/Mygames/formsPost/Frompost.module.css'
import { removeVG } from '../../../redux/actions';
const FormDelete = () => {
    const dispatch = useDispatch();
    const [deleteid, setDeleteid] = useState({
        id: ''
    })
    const HandleonChange = (event) => {
        setDeleteid({
            ...deleteid,
            [event.target.name]: event.target.value
        })
    }


    const handleOnSubmit = (event) => {
        event.preventDefault()
        dispatch(removeVG(deleteid.id));
        alert("El Juego a sido Borrado!")
    }
    return (
        <div onSubmit={handleOnSubmit}>
            <form action="">
                <label htmlFor="">Id para eliminar el game</label>
                <input className={style.inputss} type="number" name="id" placeholder='Id para Eliminar el game' onChange={HandleonChange} />
                <button className={style.button_env} disabled={!deleteid.id}>Borrar</button>
            </form>
        </div>
    )
}

export default FormDelete