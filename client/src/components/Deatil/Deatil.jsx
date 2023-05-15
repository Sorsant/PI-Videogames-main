import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';




const Detail = () => {
    const { id } = useParams();
    const [videogame, setVideogame] = useState({});

    // useEffect(() => {
    //     axios(`http://localhost:3001/videogames/${id}`)
    //         .then(response => response.data)
    //         .then((data) => {
    //             if (data.name) {
    //                 setVideogame(data);
    //             } else {
    //                 window.alert('No hay personajes con ese ID');
    //             }
    //         });
    //     return setCharacter({});
    // }, [id]);


    return (
        <div >
            <div >
                <div >
                    <h2>ID: {videogame?.id}</h2>
                    <h2>Nombre: {videogame?.name}</h2>
                    <img src={videogame?.image} alt={videogame?.name} />
                    <h2>Platformas: {videogame?.platforms}</h2>
                    <h2>Description: {videogame?.description}</h2>
                    <h2>Genero: {videogame?.gender}</h2>
                    <h2>Fecha: {videogame?.fecha}</h2>
                    <h2>Rating: {videogame?.rating}</h2>

                </div>
            </div>

        </div>
    )
}

export default Detail;