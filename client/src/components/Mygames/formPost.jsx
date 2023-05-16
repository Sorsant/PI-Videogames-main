import React from 'react'

function formPost() {
    return (
        <div>
            <form action="">
                <label htmlFor="">Nombre Del Juego</label>
                <input type="text" name="name" placeholder="Name" />
                <label htmlFor="">Plataforma Del Videojuego</label>
                <input type="text" name="plataformas" placeholder="Plataformas" />
                <label htmlFor="">Genero del Videojuego</label>
                <input type="text" name="genres" placeholder="Genero" />
                <label htmlFor="">Rating del Videojuego</label>
                <input type="number" name="rating" placeholder="Rating" />
                <label htmlFor="">Fecha del Videojuego</label>
                <input type="date" name="fecha" placeholder="Fecha" />
                <label htmlFor="">Descripcion del Juego</label>
                <input type="text" name="description" placeholder="Descripcion" />
                <label htmlFor="">Imagen del Juego</label>
            </form>
        </div>
    )
}

export default formPost


