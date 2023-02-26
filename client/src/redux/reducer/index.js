import {GET_DOGS,FILTER_DOGS_BY_ORIGIN, FIND_BY_NAME,SORT_BY_NAME, FILTER_DOGS_BY_TEMP, SORT_BY_MAXWEIGHT,SORT_BY_MINWEIGHT, GET_ALL_TEMPS, GET_DOG_BY_ID, GET_FAVORITES, GET_TEMPERAMENTS } from "../actions/types";
import { findByName  } from "./helpers";

const initialState = {
  dogs: [],
  temperaments: [],
  details: {},
  favorites:[],
  allDogs:[],
  allTemperaments: [],
};
  
const rootReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
   case GET_DOGS:
      return{
         ...state,
         dogs:action.payload,
         allDogs:action.payload
      }
   case GET_ALL_TEMPS:
      return{
         ...state,
         allTemperaments:action.payload
      }
   case GET_TEMPERAMENTS:
      return {
         ...state,
         temperaments : action.payload,
         allTemperaments: action.payload
      }
  case SORT_BY_NAME:
      let orderedDogs = action.payload ==='ASC' ? state.dogs.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)) : action.payload==='DES' ? state.dogs.sort((b,a) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)) : 'xd'
      console.log(orderedDogs)
      return{
        ...state,
        dogs:[...orderedDogs]
    }
   case FILTER_DOGS_BY_TEMP:
      /* let aux = state.dogs?.filter((el) => {
         return el.temperaments?.includes(action.payload)
       }); */
      return{
         ...state,
         dogs:action.payload
         
      }
   case FIND_BY_NAME:
      let results =findByName(state.allDogs,state.allTemperaments,action.payload)
      return results===null
      ? {...state
         ,temperaments:state.allTemperaments,dogs:state.allDogs} 
      : {
         ...state,
         dogs:results[0],
         temperaments:results[1]
      }

   case GET_DOG_BY_ID:
      return {
         ...state,
         details:action.payload
      }
   case SORT_BY_MINWEIGHT:
      
      let orderedDogsMinWeight = action.payload ==='ASC' ? state.dogs?.sort((a,b)=>{return parseFloat(a.weight[0]) - parseFloat(b.weight[0])}) 
      : action.payload==='DES' ? state.dogs?.sort((b,a)=>{return parseFloat(a.weight[0]) - parseFloat(b.weight[0])})  : 'xd'
      return{
         ...state,
         dogs:[...orderedDogsMinWeight]
         
      }
   case SORT_BY_MAXWEIGHT:
      
      let orderedDogsMaxWeight = action.payload ==='ASC' ? state.dogs?.sort((a,b)=>{return parseFloat(a.weight[1]) - parseFloat(b.weight[1])}) 
      : action.payload==='DES' ? state.dogs?.sort((b,a)=>{return parseFloat(a.weight[1]) - parseFloat(b.weight[1])})  : 'xd'
      return{
         ...state,
         dogs:[...orderedDogsMaxWeight]
         
      } 
   case FILTER_DOGS_BY_ORIGIN:
         let orderedDogsByOrigin =  action.payload ==='Normal' ? state.allDogs?.filter(dog=> !Object.keys(dog).includes('DB')): action.payload==='Created' ? state.allDogs?.filter(dog=>Object.keys(dog).includes('DB'))  : 'xd'
            return{
               ...state,
               dogs:[...orderedDogsByOrigin]
            }
   default:
      return{...state}
  }
};

export default rootReducer