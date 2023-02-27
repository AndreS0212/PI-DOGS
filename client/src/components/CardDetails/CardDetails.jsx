import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDogsById } from '../../redux/actions'
import style from './CardDetails.module.css'
import { Loading } from '../Loading/Loading'
import {PreviewTemps} from '../PreviewTemps/PreviewTemps'
export default function CardDetails(){
    const dispatch= useDispatch()
    let {id} = useParams()
    const dogDetails = useSelector(state=>state.details)

    useEffect(()=>{
        dispatch(getDogsById(id))
    },[dispatch,id])

    
    return(
        <>
        {dogDetails.name ? (
            <div className={style.mainContainer}>
              <h1 className={style.name}>  {dogDetails.name}<p>Id: {id}</p></h1>
              <div className={style.flexContainer} >
                
                < div className={style.imageContainer}>
                  <img src={dogDetails.image} alt={`Imagen de ${dogDetails.name}`} />
                </div>
                <div className={style.details}>
                  <div>
                    <h2>Life Span</h2>
                    <span>{dogDetails.life_span}</span>
                  </div>
                  <div>
                    <h2>Height</h2>
                    <span>{`${dogDetails.height[0]}cm - ${dogDetails.height[1]}cm`}</span>
                  </div>
                  <div>
                    <h2>Weight</h2>
                    <span>{`${dogDetails.weight[0]}kg - ${dogDetails.weight[1]}kg`}</span>
                  </div>
                  <h2>Temperaments</h2>
                  <div className={style.temperaments}>
                  {dogDetails.DB==='true' ? dogDetails.temperaments?.map(temp=>(
                    <PreviewTemps temp={Object.values(temp)}/>)
                    ): dogDetails.temperaments.split(',').map(temp=>(
                      <PreviewTemps temp={temp}/>))}

                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
    </>
)
}
