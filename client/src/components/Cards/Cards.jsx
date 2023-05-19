import Card from '../Card/Card.jsx';
import style from './cards.module.css'
import Paginate from '../Paginate/paginate.jsx';
import { getAllVG } from '../../redux/actions.js'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";

export default function Cards() {
    const dispatch = useDispatch();
    const allVg = useSelector((state) => state.allvideogames)
    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(15)

    const maximo = allVg ? allVg.length / porPagina : 0;

    useEffect(() => {
        dispatch(getAllVG())
    }, [dispatch])


    const videogamesAll = allVg
    return (
        <div className={style.cardList}>
            {videogamesAll?.slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
            ).map(vg =>

                <Card
                    key={vg.id}
                    id={vg.id}
                    name={vg.name}
                    rating={vg.rating}
                    genres={vg.genres.join(', ')}
                    image={vg.image}
                />)}
            <div className={style.Divpagina}>

                <Paginate pagina={pagina} setPagina={setPagina} maximo={maximo} />
            </div>
        </div>
    )
}
