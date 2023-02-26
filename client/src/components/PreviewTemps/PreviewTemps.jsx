import React from 'react'
import style from './PreviewTemps.module.css'

export const PreviewTemps = ({temp,handleDelete}) =>{



    return(
        <div className={style.temp}>
            <span key={temp}>{temp}</span>
            {handleDelete&&<button onClick={()=>handleDelete(temp)}>X</button>}
        </div>
        
    )
}