import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getGenres, getGenresDB, filterCards, OrderCardsAz, OrderRating } from '../../redux/actions.js'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'

const HomePage = () => {
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.filterGenres)


    useEffect(() => {
        dispatch(getGenres())

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


    return (
        <div >
            <Nav /><div>
                <h3>Elige el Genero del VideoGame</h3>
                <select name="Genres" onChange={handleFilter}>

                    <optgroup label="Generos"></optgroup>
                    <option value="AllGeners">All Geners</option>
                    {allGenres?.map((genres) => {
                        return <option value={genres}>{genres}</option>
                    })}
                </select>
            </div>
            <div>
                <h3>Orden Alfabeticamente</h3>
                <select name="Alfabeticamente" onChange={handleOrderAz}>
                    <optgroup label="Orden Alfabetico"></optgroup>
                    <option value="Default">Default</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
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
            <Cards />
        </div>
    )
}

export default HomePage;