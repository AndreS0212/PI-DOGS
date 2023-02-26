import React from "react";
import style from "./Paginate.module.css"

export default function Paginate({ dogsPerPage, allDogs, paginate,back,forward }) {
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) { //cantidad de elementos totales, dividido limite de elementos por pagina
        pageNumbers.push(i);
    }

    return(
        <div >
            <button onClick={() => back()} type="button">Previous</button>
                { pageNumbers && pageNumbers.map(number => (
                         <button onClick={() => paginate(number)} key={number}type="button">{number}</button> 
                ))}
            <button onClick={() => forward(Math.ceil(allDogs.length / dogsPerPage))} type="button">Next</button>
        </div>
    )
}