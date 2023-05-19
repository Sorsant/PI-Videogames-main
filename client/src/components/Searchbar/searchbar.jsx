import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { getVGName } from '../../redux/actions'
import style from './search.module.css'
export default function SearchBar() {


    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    const handleSubmit = () => {
        dispatch(getVGName(search))
    }
    return (

        <div className={style.searchBox}>

            <input placeholder="Name VideoGame 🔍" type='search' value={search} onChange={handleChange} />
            <button className={style.button} type='Submit' onClick={() => { handleSubmit(); setSearch("") }}>Buscar</button>

        </div >
    );
}