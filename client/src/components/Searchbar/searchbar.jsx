import style from './search.module.css'
export default function SearchBar() {

    return (
        <div className={style.searchBox}>
            <input placeholder="Nombre del VideoGame 🔍" type='search' />
            <button>Buscar</button>

        </div >
    );
}