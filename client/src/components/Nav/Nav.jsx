import SearchBar from '../Searchbar/searchbar';
import { NavLink, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Nav = () => {
    const location = useLocation();


    return (
        <nav >
            <div >
                <NavLink to="/HomePage"><button >Inicio</button></NavLink>
                <NavLink to="/Mygames"> <button  >My Games</button></NavLink>

            </div>

            {location.pathname !== "*" && location.pathname !== "/Mygames" ? <SearchBar /> : null}
            <NavLink to='/'><button >Log Out</button></NavLink>

        </nav>


    )
}

export default Nav;