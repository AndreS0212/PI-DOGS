import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { findByName,setTemps } from '../../redux/actions/index.js';
import style from './SearchBar.module.css'
export default function SearchBar(){
    const dispatch = useDispatch();
    const [searchDog, setSearchDog] = useState("");
    const handleInput = (e) => {
        setSearchDog(e.target.value)
        dispatch(findByName(e.target.value))
    }
    useEffect(() => {
        // do something
    }, [searchDog]);
    return(
        <div className={style.searchBar}>
            <input  type="text" onChange={handleInput} value={searchDog} placeholder="Search..."/>
        </div>
    )
}