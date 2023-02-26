import React from 'react'
import style from './Empty.module.css'
import emptyimg from '../../assets/emptyimg.jpg'
export function Empty() {

    return (
        <div className={style.empty}>
            <img src={emptyimg} height='350px' weight='380px' alt="Empty image" />
            <h1>We couldn't find any dog with that requirements</h1>
        </div>
    )



}