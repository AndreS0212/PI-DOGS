import React from 'react';
import styles from './Loading.module.css';
import loading from "../../assets/loading.gif"
export function Loading(){
    return (
      <div className={styles.Loading}>
        <div>
          <img className={styles.img} src={loading} alt="loading"></img>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  };