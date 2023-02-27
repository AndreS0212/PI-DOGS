import React from 'react'
import style from './Nav.module.css'
import {Link} from 'react-router-dom'
export default function Nav(){


    return(
            <nav id="nav-1">
                <div className={style.container}>
                    <Link className={style.link} to={'/home'}>Home</Link>
                    <Link className={style.link} to={'/form'}><button>Create a Dog</button></Link>

                </div>
                
            </nav>
            

    )
}