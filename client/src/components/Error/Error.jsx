import React from 'react'
import style from './error.module.css'

function Error() {
    return (
        <div className={style.fondo}>
            <div className={style.circ}>
                <div className={style.load}> Error. . . </div>
                <div className={style.hands}></div>
                <div className={style.body}></div>
                <div className={style.head}>
                    <div className={style.eye}></div>
                </div>
            </div>
        </div>
    )
}

export default Error