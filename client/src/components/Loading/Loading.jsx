import React from 'react'
import style from "./loading.module.css"
const Loading = () => {
    return (
        <div className={style.LoadContainer}>

            <div className={style.loader_wrapper} >
                <div className={style.packman}></div>
                <div className={style.dots}>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                </div>
            </div >

        </div>
    )
}

export default Loading