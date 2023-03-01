const axios = require("axios");
const {Dog,Temperament} = require('../db')

async function getDogsApi() {
    const results = await axios('https://api.thedogapi.com/v1/breeds?API_KEY=live_LiNKrnfhZ6n9RyPLYzKm4rmwIwcGS3nn9G1HogLW1oyhDxZSnj6qOJmxX5QwQKVQ')
    const resultsInfo = await results.data.map((dog)=>{
        let temperaments=[]
        if(dog.temperament){
            temperaments= dog.temperament.split(', ')
        }
        weight=dog.weight.metric.split(' - ')
        height=dog.height.metric.split(' - ')

        return {
            id : dog.id,
            image: dog.image.url,
            name : dog.name,
            life_span : dog.life_span,
            temperaments: temperaments.join(','),
            weight,
            height
        }
    })
    return resultsInfo

}
async function getDogsDb(){
    const results = await Dog.findAll({
        include : {
        model : Temperament,
        attributes : ['name'],
        through : {
            attributes:[],
        },
    }
    })
    return results
}
async function createDogDb(dog,temperaments){
    let dogCreated = await Dog.create(dog)
    if(temperaments.length>1){
        temperaments.forEach(async element => {
            let temperamentDb = await Temperament.findAll({where : {name : element}})
            dogCreated.addTemperament(temperamentDb[0])
        });
    }else{
        let temperamentDb = await Temperament.findAll({where : {name : temperaments}})
        dogCreated.addTemperament(temperamentDb[0])

    }
    return dogCreated
}
async function getDogsAll(name){
    const dataApi = await getDogsApi()
    const dataDb = await getDogsDb()
    const DataAll = dataApi.concat(dataDb)
    const results = name ? DataAll.filter(ele=>ele.name.toLowerCase().includes(name.toLowerCase())) : DataAll
    return results
}

module.exports = {
    getDogsApi,
    getDogsDb,
    getDogsAll,
    createDogDb
  };