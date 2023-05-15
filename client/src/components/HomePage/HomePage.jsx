import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllVG } from '../../redux/actions'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'

const HomePage = () => {
    const dispatch = useDispatch();
    const allVg = useSelector((state) => state.allvideogames)

    useEffect(() => {
        dispatch(getAllVG())
    }, [dispatch])

    return (
        <div >
            <Nav />
            <Cards allVg={allVg} />
        </div>
    )
}

export default HomePage;