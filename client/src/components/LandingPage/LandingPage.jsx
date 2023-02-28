import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'
export default function LandingPage() {
  return (
    <header className={style.header}>
      <div className={style.brand_box}>
        <span className={style.brand}>PIDOGS</span>
      </div>

      <div className={style.text_box}>
        <h1 className={style.heading_primary}>
          <span className={style.heading_primary_main}>PI-DOGS</span>
          <span className={style.heading_primary_sub}>SoyHenry</span>
        </h1>
        <Link to={'/home'}>
            <a href className={`${style.btn} ${style.btn_white} ${style.btn_animated}`} >Explore</a>
        </Link>
      </div>
    </header>
  );
}
