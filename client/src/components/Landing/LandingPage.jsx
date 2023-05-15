import { Link } from 'react-router-dom';
import style from './Landing.module.css'
const Landing = () => {
    return (
        <div className={style.fondo}>
            <div>

                <div className={style.Box}>

                    <h1>Ingresa a Home Page</h1>
                    <button>
                        <Link to='/HomePage'>Start the games</Link>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Landing;