import React,{useState,useEffect} from 'react'
import { getDogs,sortByName } from '../../../redux/actions';
import { useDispatch } from 'react-redux';


export default function ByName(){
    const dispatch = useDispatch();

    const [order, setOrder] = useState("");
  
    useEffect(() => {
      dispatch(getDogs());
    }, []);
  
    const HandleSort = (e) => {
      e.preventDefault();
      dispatch(sortByName(e.target.value));
    };

    return(
        <div>
        <select defaultValue={'DEFAULT'}  onChange={(e) => HandleSort(e)} id="Name" >
            <option value='DEFAULT' disabled>Alphabetical</option>
            <option value="ASC">A-Z</option>
            <option value="DES">Z-A</option>
        </select>
    </div>


    )

}