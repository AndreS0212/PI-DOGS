import React,{useState,useEffect} from 'react'
import { getDogs,sortByOrigin } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

export default function ByOrigin({handleChangeOri}){
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getDogs());
    }, [dispatch]);
  
    const HandleSort = (e) => {
      e.preventDefault();
      handleChangeOri()
      dispatch(sortByOrigin(e.target.value));
    };
    return(
        <div>
            <select defaultValue={'DEFAULT'} onChange={(e) => HandleSort(e)} id="Origin" >
                <option value='DEFAULT' disabled >Origin</option>
                <option  value="Normal">Normal</option>
                <option value="Created">Created</option>
            </select>
        </div>
    )
}