const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const {getAllTemps} = require("../controllers/Temps");
const router = Router();


router.get('/', async (req,res)=>{
    const result = await getAllTemps()
    result.length ? res.status(200).json(result) : res.status(404).send({error : 'No se encontraron temperatures'})
})











module.exports = router;