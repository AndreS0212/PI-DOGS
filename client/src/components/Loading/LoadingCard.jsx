import React from 'react';
import styles from './LoadingCard.module.css';
import loading from "../../assets/cardloading.gif"
export default function LoadingCard(){
    return (
      <div className={styles.Loading}>
        <div>
          <img className={styles.img} src={loading} alt="loading"></img>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  };