import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'
export default function LandingPage() {
  return (
    <header className={style.header}>
      <div className={style.brand_box}>
        <span className={style.brand}>Example Brand</span>
      </div>

      <div className={style.text_box}>
        <h1 className={style.heading_primary}>
          <span className={style.heading_primary_main}>Heading Primary Main</span>
          <span className={style.heading_primary_sub}>The secondary heading</span>
        </h1>
        <Link to={'/home'}>
            <a href className={`${style.btn} ${style.btn_white} ${style.btn_animated}`} >Find it!</a>
        </Link>
      </div>
    </header>
  );
}
