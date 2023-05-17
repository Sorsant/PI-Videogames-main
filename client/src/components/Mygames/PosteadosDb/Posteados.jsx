import Card from '../../Card/Card';
import style from './posteados.module.css'
import { getAllPosts } from '../../../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, } from "react";

const Posteados = () => {
    const dispatch = useDispatch();
    const allVg = useSelector((state) => state.posts)


    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])


    const videogamesAll = allVg
    return (
        <div className={style.cardList}>
            {videogamesAll?.map(vg =>

                <Card
                    key={vg.id}
                    id={vg.id}
                    name={vg.name}
                    rating={vg.rating}
                    genres={vg.genres}
                    image={vg.image}
                />)}

        </div>
    )
}
export default Posteados