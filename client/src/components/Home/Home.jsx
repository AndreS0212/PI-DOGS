import React, { useEffect,useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import style from './Home.module.css'
import Cards from '../Cards/Cards';
export const Home = () => {

    return(
        <div >
            <div className={style.container}>
                <Sidebar/>
                <Cards/>
            </div>
            
        </div>
            
        
        
    )
        
}