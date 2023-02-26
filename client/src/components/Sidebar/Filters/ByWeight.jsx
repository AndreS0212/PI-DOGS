import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { getDogs,sortByMaxWeight,sortByMinWeight } from '../../../redux/actions';
export default function ByWeight(){
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getDogs());
    }, []);
  
    const HandleSort = (e) => {
      e.preventDefault();
      if(e.target.id==='MinWeight') dispatch(sortByMinWeight(e.target.value));
      else if(e.target.id==='MaxWeight')dispatch(sortByMaxWeight(e.target.value));
    };







    return(
        <>
        <div>
        <select defaultValue={'DEFAULT'} onChange={(e) => HandleSort(e)} id="MinWeight">
            <option value='DEFAULT' disabled >Min Weight</option>
            <option value="ASC">Ascending</option>
            <option value="DES">Descending</option>
        </select> 
        </div>
        <div>
            <select defaultValue={'DEFAULT'} onChange={(e) => HandleSort(e)} id="MaxWeight">
                <option value='DEFAULT' disabled>Max Weight</option>
                <option value="ASC">Ascending</option>
                <option value="DES">Descending</option>
            </select> 
        </div>
        </>

    )
}