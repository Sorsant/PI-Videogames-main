import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getGenres, getAllPosts, filterCards, OrderCardsAz, OrderRating } from '../../redux/actions.js'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import Load from '../Loading/Loading.jsx'

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
            {loading ? (<Load />) : (<div>
                <Nav />
                <div>
                    <h3>Elige el Genero del VideoGame</h3>
                    <select name="Genres" onChange={handleFilter}>

                        <optgroup label="Generos"></optgroup>
                        <option value="AllGeners">All Geners</option>
                        <optgroup label="***********"></optgroup>
                        {allGenres?.map((genres) => {
                            return <option value={genres}>{genres}</option>
                        })}
                        <optgroup label="***********"></optgroup>
                    </select>
                </div>
                <div>
                    <h3>Orden Alfabeticamente</h3>
                    <select name="Alfabeticamente" onChange={handleOrderAz}>
                        <optgroup label="Orden Alfabetico"></optgroup>
                        <optgroup label="***********"></optgroup>
                        <option value="Default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <optgroup label="***********"></optgroup>
                    </select>
                </div>
                <div>
                    <h3>Orden Ratings</h3>
                    <select name="Ratings" onChange={handleOrderRatings}>
                        <optgroup label="Ratings"></optgroup>
                        <option value="Default">Default</option>
                        <option value="MinRating">⭐</option>
                        <option value="MaxRating">⭐⭐⭐⭐⭐</option>
                    </select>
                </div>
                <div>
                    <h3>Filtro de tipo  Juego</h3>
                    <select name="Juegos" onChange={handleGames}>
                        <optgroup label="Tipo de Juegos"></optgroup>
                        <optgroup label="***********"></optgroup>
                        <option value="default">  default</option>
                        <option value="Api">   Api</option>
                        <option value="Db">    Db</option>
                        <optgroup label="***********"></optgroup>
                    </select>
                </div>
                <Cards /> </div>)}
        </div>
    )
}

export default HomePage;