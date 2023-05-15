import Card from '../Card/Card.jsx';
import style from './cards.module.css'

export default function Cards({ allVg }) {
    const videogamesAll = allVg
    return (
        <div className={style.cardList}>
            {videogamesAll?.map(vg =>

                <Card
                    // vg={vg}
                    key={vg.id}
                    id={vg.id}
                    rating={vg.rating}
                    genres={vg.genres}
                    image={vg.image}
                />)}
        </div>
    )
}
