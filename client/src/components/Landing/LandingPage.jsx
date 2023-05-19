import { Link } from 'react-router-dom';
import style from './Landing.module.css'
const Landing = () => {
    return (
        <div className={style.fondo}>
            <div>

                <div className={style.Box}>

                    <h1 className={style.titleH1}>Ingresa a Pac Games</h1>
                    <button className={style.botondeinicio}>
                        <Link to='/HomePage'>Start the games</Link>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Landing;