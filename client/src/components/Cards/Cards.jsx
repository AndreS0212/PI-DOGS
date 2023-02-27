import React from 'react'
import style from './Cards.module.css'
import Paginate from '../Paginate/Paginate'
import { Loading } from '../Loading/Loading'
import Card from '../Card/Card'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import {getDogs } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { Empty } from '../Empty/Empty'


export default function Cards(){
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs);
    const [currentPage,setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true);
    const [charactersPerPage,/* setCharactersPerPage */] = useState(8)
    const indexOfLastChar = currentPage * charactersPerPage
    const indexOfFirstChar = indexOfLastChar - charactersPerPage
    const currentCharacter = allDogs.slice(indexOfFirstChar,indexOfLastChar)
    const setPageNumber = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    
    const back = ()=>{
        if(currentPage>1) setPageNumber(currentPage-1)
    }
    const forward = (maxpages)=>{
        if(currentPage<maxpages) setPageNumber(currentPage+1)
    }
    useEffect(() => {
        dispatch(getDogs());  
        const timer = setTimeout(() => {
            setLoading(false);
          }, 3500);
          return () => clearTimeout(timer);  
        //para q se vea el gif de loading

      },[dispatch]);
      useEffect(() => {
        setPageNumber(1)

      },[allDogs]);
return(
    <>
        
        {!loading ? (
        !allDogs.length ? (
          <Empty />
        ) : (
            <div className={style.cardContainer}>
            {currentCharacter?.map(char=>{
            return(
            <div key={char.id} className={style.card}>
                {<Link to={"/detail/" + char.id}>
                    <Card  key={char.id} id={char.id} name={char.name} image={char.image} temperaments={char.temperaments} weight={char.weight}/>
                </Link>}
                
            </div>
            )
        })}
          </div>
        )
      ) : (
        <Loading />
      )}
       <Paginate dogsPerPage={charactersPerPage} allDogs={allDogs} paginate={setPageNumber} back={back} forward={forward}/>
    </>


)

}