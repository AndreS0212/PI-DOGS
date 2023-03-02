import React from 'react'
import image from '../../assets/404image.png'
import style from './NotFound.module.css'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
    <div className={style.container}>
        <h1>Oops!</h1>
        <h3>404 Page Not Found</h3>
        <img src={image} alt="" />
        <Link to='/home'>
            <h2>Go Back to Home</h2>
        </Link>
    </div>
    )
}