import {    GET_DOGS, GET_TEMPERAMENTS,
    FILTER_DOGS_BY_ORIGIN,
    FILTER_DOGS_BY_TEMP,
    FIND_BY_NAME,
    GET_DOG_BY_ID,
    GET_ALL_TEMPS,
    SORT_BY_NAME,
    SORT_BY_MINWEIGHT,
    SORT_BY_MAXWEIGHT,
    SET_TEMPERAMENTS
  } from "./types";
import axios from "axios";

export const getDogs =()=>{
    return async function (dispatch){
      try{
        const resp = await axios('/dogs')
        const allDogs =await resp.data
        allDogs.forEach(async element => {
          if(element.id.length>2) element.temperaments = ((element.temperaments.map(el=>Object.values(el))).flat()).join(',')
        });
        dispatch({ type: GET_DOGS, payload: allDogs})
      }catch(error){
        alert(error.response.data)
      }
    }
}
export const getAllTemps=()=>{
  return async function (dispatch){
    const res = await axios('/temperaments')
    const allTemps = res.data.map(temp=>temp.name)
    dispatch({type: GET_ALL_TEMPS, payload : allTemps})
  }
}
export const filterByTemperament = (temp)=>{
    return function (dispatch) {
      dispatch({ type: FILTER_DOGS_BY_TEMP, payload: temp });
      };
   }

export const sortByOrigin =(order)=>{
    return function (dispatch){
        dispatch({ type: FILTER_DOGS_BY_ORIGIN, payload: order })}
}
export const getDogsById =  (id)=>{
  return async function  (dispatch){ 
    const details = await axios(`/dogs/${id}`)
    dispatch({ type: GET_DOG_BY_ID, payload: details.data })}
}
export const sortByName =(payload)=>{
  return async function (dispatch){
    dispatch({ type: SORT_BY_NAME, payload: payload })
   
  }

}
export const sortByMaxWeight =(order)=>{
    return function(dispatch){
       dispatch({type : SORT_BY_MAXWEIGHT , payload: order})
    }

}
export const setTemperaments =()=>{
  return function(dispatch){
     dispatch({type : SET_TEMPERAMENTS})
  }
}
export const sortByMinWeight =(order)=>{
  return function(dispatch){
     dispatch({type : SORT_BY_MINWEIGHT , payload: order})
  }

}
export const findByName =(name)=>{
  return function (dispatch){
    dispatch({ type: FIND_BY_NAME, payload: name })
   
  }

}
export const getTemps =()=>{
    return function (dispatch){
      dispatch({type: GET_TEMPERAMENTS})}
   }
export const createDog =async (dog)=>{
      try{
        const response = await axios.post('/dogs', dog);
        return 'Dog created successfully'
      }catch(error){
        return error.response.data
      }
      
        

   }
export const addFavorite =()=>{
    

}

export const getFavorites =()=>{
    

}
export const deleteFavorite =()=>{
    

}