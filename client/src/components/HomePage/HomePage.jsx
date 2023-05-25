import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getGenres, getAllPosts, filterCards, OrderCardsAz, OrderRating } from '../../redux/actions.js'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import Load from '../Loading/Loading.jsx'
import style from './home.module.css'

const HomePage = () => {
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.filterGenres)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        dispatch(getGenres())
            .then(() => setLoading(false))
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })


    }, [dispatch])


    const handleFilter = (event) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(filterCards(value));
    }
    const handleOrderAz = (event) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(OrderCardsAz(value));
    }
    const handleOrderRatings = (event) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(OrderRating(value));
    }
    const handleGames = (event) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(getAllPosts(value));
    }

    return (
        <div >
            {loading ? (<Load />) : (<div >
                <Nav />
                <div className={style.contenedor}>
                    <div>
                        <h4 className={style.h3_select}>Elige el Genero del VideoGame</h4>
                        <select name="Genres" onChange={handleFilter}>

                            <optgroup label="Generos"></optgroup>
                            <option value="AllGeners">All Geners</option>

                            {allGenres?.map((genres) => {
                                return <option value={genres} key={genres}>{genres}</option>
                            })}

                        </select>
                    </div>
                    <div>
                        <h4 className={style.h3_select}>Orden Alfabeticamente</h4>
                        <select name="Alfabeticamente" onChange={handleOrderAz}>
                            <optgroup label="Orden Alfabetico"></optgroup>
                            <option value="Default">Default</option>

                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>
                    </div>
                    <div>
                        <h4 className={style.h3_select}>Orden Ratings</h4>
                        <select name="Ratings" onChange={handleOrderRatings}>
                            <optgroup label="Ratings"></optgroup>
                            <option value="Default">Default</option>
                            <option value="MinRating">⭐</option>
                            <option value="MaxRating">⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>
                    <div>
                        <h4 className={style.h3_select}>Filtro de tipo  Juego</h4>
                        <select name="Juegos" onChange={handleGames}>
                            <optgroup label="Tipo de Juegos"></optgroup>

                            <option value="default">  Default</option>
                            <option value="Api">   Api</option>
                            <option value="Db">    Db</option>

                        </select>
                    </div>
                </div>

                <Cards /> </div>)}
        </div>
    )
}

export default HomePage;