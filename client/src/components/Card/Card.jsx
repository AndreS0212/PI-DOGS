import React from 'react'
import { PreviewTemps } from '../PreviewTemps/PreviewTemps'
import style from './Card.module.css'
export default function Card({id,name,image,temperaments,weight}){
    
    return(
        <div className={style.card}>
                <h1>{name}</h1>
                <div className={style.img_container}>
                    <img src={image} alt={`Imagen de ${name}`} />
                </div>
                <div className={style.tempContainer}>
                    {temperaments?.split(',').map(temp=>(<PreviewTemps key={temp} temp={temp}/>))}
                </div>
                <span>Min weight:{weight[0]} - Max weight: {weight[1]}</span>
        </div>
        )




}