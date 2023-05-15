import SearchBar from '../Searchbar/searchbar';
import { NavLink, } from 'react-router-dom';

const Nav = () => {



    return (
        <nav >
            <div >

                <NavLink to="/Home"><button >Inicio</button></NavLink>
                <NavLink to="/FromPage"> <button  >Add to Game</button></NavLink>
                <NavLink to="/PutPage"><button>Edit to Game</button></NavLink>
                <NavLink to="/DeletPage"><button>Delete to Game</button></NavLink>
            </div>
            <SearchBar />
            <NavLink to='/'><button >Log Out</button></NavLink>

        </nav>


    )
}

export default Nav;