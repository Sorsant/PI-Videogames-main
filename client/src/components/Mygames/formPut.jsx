import React from 'react'

function formPut() {
    return (
        <div>
            <form action="">
                <label htmlFor="">Edita El Nombre Del Juego</label>
                <input type="text" name="name" placeholder="Name" />
                <label htmlFor="">Edita la Plataforma Del Videojuego</label>
                <input type="text" name="plataformas" placeholder="Plataformas" />
                <label htmlFor="">Edita El Genero del Videojuego</label>
                <input type="text" name="genres" placeholder="Genero" />
                <label htmlFor="">Edita El Rating del Videojuego</label>
                <input type="number" name="rating" placeholder="Rating" />
                <label htmlFor="">Edita la Fecha del Videojuego</label>
                <input type="date" name="fecha" placeholder="Fecha" />
                <label htmlFor="">Edita la Descripcion del Juego</label>
                <input type="text" name="description" placeholder="Descripcion" />
                <label htmlFor="">Edita la Imagen del Juego</label>
                <button className={style.miBoton} disabled={!userData.email || !userData.password || errors.email || errors.password}>Enviar</button>
            </form>
        </div>
    )
}

export default formPut