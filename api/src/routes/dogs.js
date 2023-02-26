const { Router } = require("express");
const { UUID } = require("sequelize");
const { Dog, Temperament } = require("../db");
const {getDogsAll,createDogDb} = require("../controllers/Dogs");
const router = Router();


router.get('/',async (req,res)=>{
    let dataAll=await getDogsAll()
    res.status(200).json(dataAll)
})

router.get('/name',async(req,res)=>{
    const { name } = req.query
    const results = await getDogsAll(name)
    results ? res.status(200).json(results) : res.status(404).send({error : 'No se encontro ninguna raza con esos parametros de busqueda'})

})

router.post('/',async(req,res)=>{
    const {name,min_weight,max_weight,min_height,max_height,min_life_span,max_life_span,image,temperaments} = req.body
    const weight = [min_weight,max_weight]
    const height = [min_height,max_height]
    const life_span = `${min_life_span} - ${max_life_span} years`
    const dog = {
        name,
        weight,
        height,
        life_span,
        image}
    try{
        const createdDog = await createDogDb(dog,temperaments)
        res.status(201).json(createdDog)
    }catch(err){
        res.status(404).send(err.message)
    }

})

router.get('/:idRaza',async(req,res)=>{
    const {idRaza} = req.params
    const dataAll = await getDogsAll()
    const dataFound = dataAll.find(ele=>ele.id == idRaza)
    dataFound ? res.status(200).json(dataFound) : res.status(404).send({error : `No se encontro ninguna raza con id ${idRaza} `})
})



module.exports = router;