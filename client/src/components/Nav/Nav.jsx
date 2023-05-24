import SearchBar from '../Searchbar/searchbar';
import { NavLink, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import style from './Nav.module.css'
const Nav = () => {
    const location = useLocation();


    return (
        <nav className={style.navbar}>
            <div className={style.left_buttoms} >
                <NavLink to="/HomePage"><button >Inicio</button></NavLink>
                <NavLink to="/Mygames"> <button  >My Games</button></NavLink>

            </div>

            {location.pathname !== "*" && location.pathname !== "/Mygames" ? <SearchBar /> : null}
            <NavLink to='/'><button >Landing</button></NavLink>
            <NavLink to='/asdasda'><button >Error</button></NavLink>
        </nav>


    )
}

export default Nav;