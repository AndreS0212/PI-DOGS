

export function findByName(allDogs,allTemperaments,filter){
   //Obtengo los perros filtrados por el filtro proporcionado
   const filteredDogs= allDogs.filter(dog=>{
        if(filter.length>0){
           //return dog.name[0].toLowerCase()===filter[0].toLowerCase() ? dog.name?.toLowerCase().includes(action.payload) ? true : false : false
           //Devuelvo true si el nombre del perro incluye el filtro
           return dog.name.toLowerCase().includes(filter.toLowerCase()) 
        }else if(filter.length===0){
             //Devuelvo true si el filtro está vacío
           return true
        }
        //Devuelvo false si no se cumple ninguna de las condiciones anteriores
        return false
     })
     // Obtener la lista de temperamentos de los perros filtrados
     const tempsFiltered = []
     filteredDogs.map(dog=> dog.temperaments.split(',').map(e=>tempsFiltered.push(e)))
     // Eliminar las repeticiones de la lista de temperamentos
     const tempsFiltered2=tempsFiltered.filter((item,index) => tempsFiltered.indexOf(item) === index)
     // Filtra los temperamentos a partir de la lista obtenida anteriormente
     const filteredTemps = allTemperaments?.filter(temp=>tempsFiltered2.includes(temp.name))
     filteredDogs.map(dog=> dog.temperaments.split(',').map(e=>tempsFiltered.push(e)))
     // Ordenar los perros filtrados en base al filtro proporcionado
     const orderedDogs= filteredDogs.sort((a,b)=>{
      //Filtro primero los que empiezan con la primera letra del filtro para que aparezcan primero
      if(a.name.slice(0,[filter.length]).toLowerCase()===filter.toLowerCase()) return -1
      else return 1
     })
     // Devuelve los resultados filtrados o null si no hay resultados
     return filter.length===0 ? null : [orderedDogs,filteredTemps]
}