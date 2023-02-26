const axios = require("axios");
const {Dog,Temperament} = require('../db')

 const  getAllTemps = async ()=>{
    const tempsApi = await axios('https://api.thedogapi.com/v1/breeds')
    const temps = tempsApi.data.map(el=> el.temperament)
    let Temperaments = temps.join().split(',')
    Temperaments = Temperaments.map( el => el.trim());
    Temperaments.forEach (el => {
        if(el !== '') {
            Temperament.findOrCreate({
                where: { name: el }    
        })
      }
    });
    const allTemperatures = await Temperament.findAll()
    return allTemperatures
}


module.exports = {
    getAllTemps
}