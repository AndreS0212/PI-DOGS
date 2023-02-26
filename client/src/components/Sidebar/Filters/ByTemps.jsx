import React from 'react'
import {useSelector } from 'react-redux';
export default function ByTemps(props){
    const dogs = useSelector(state=>state.dogs)
    const temperamentsRaw = dogs.map(dog=>dog.temperaments?.split(','))
    const temperamentsFinal= temperamentsRaw.flat().filter((item,index)=>{
        return temperamentsRaw.flat().indexOf(item) === index;
      })
    const orderedTemps=temperamentsFinal.sort()
    
    return(
        <div>
            <select defaultValue={'DEFAULT'} onChange={(e) => props.handleChange2(e)} id="Temperaments">
                <option value='DEFAULT' disabled>Temperaments</option>
                {orderedTemps?.map((temp)=>{return temp && <option key={temp} value={temp}>{temp}</option>})}
            </select>
        </div>
    )
}