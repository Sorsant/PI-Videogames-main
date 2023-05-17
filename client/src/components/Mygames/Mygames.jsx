import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import FormPost from './formsPost/formPost';
import FormPut from './formsPut/formPut';
import FormDelete from './formdelete/formDelete';
import Posteados from './PosteadosDb/Posteados';
import { getAllPosts } from '../../redux/actions'
function Mygames() {
    const allGamesCreate = useSelector((state) => state.posts)
    const [div1Enabled, setDiv1Enabled] = useState(true);
    const [div2Enabled, setDiv2Enabled] = useState(false);
    const [div3Enabled, setDiv3Enabled] = useState(false);
    const [div4Enabled, setDiv4Enabled] = useState(false);

    const handleButton1Click = () => {
        setDiv1Enabled(false);
        setDiv2Enabled(false);
        setDiv3Enabled(true);
        setDiv4Enabled(false);
    };

    const handleButton2Click = () => {
        setDiv1Enabled(false);
        setDiv2Enabled(true);
        setDiv3Enabled(false);
        setDiv4Enabled(false);
    };

    const handleButton3Click = () => {
        setDiv1Enabled(false);
        setDiv2Enabled(false);
        setDiv3Enabled(false);
        setDiv4Enabled(true);
    };

    const handleResetClick = () => {
        setDiv1Enabled(true);
        setDiv2Enabled(false);
        setDiv3Enabled(false);
        setDiv4Enabled(false);
    };
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())

    }, [dispatch])
    return (
        <div>
            <div>
                <button onClick={handleResetClick}>Crear Videogame</button>
                <button onClick={handleButton2Click} >Editar videogame</button>
                <button onClick={handleButton1Click} >Borrar Videogame</button>
                <button onClick={handleButton3Click} >Button 3</button>
                <div style={{ display: div1Enabled ? 'block' : 'none' }}>
                    <FormPost />
                </div>
                <div style={{ display: div2Enabled ? 'block' : 'none' }}>
                    <FormPut />
                </div>
                <div style={{ display: div3Enabled ? 'block' : 'none' }}>
                    <FormDelete />
                </div>
                <div style={{ display: div4Enabled ? 'block' : 'none' }}>
                    <Posteados />
                </div></div>
        </div >
    )
}

export default Mygames