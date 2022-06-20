const express = require('express')
const cors = require('cors');
const router = new express.Router()
const Parada = require('../models/parada');
const Linea = require('../models/linea');

router.get('/api/parada', cors(), async (req, res) => {
    try {
        if(!req.query.id){
            return res.send({
                error: 'Se debe pasar un id'
            })
        }
        const linea = await Linea.findById(req.query.id)
        const paradasPrimerSentido = await Parada.find({_id:linea.paradasPrimerSentido})
        const paradasSegundoSentido = await Parada.find({_id:linea.paradasSegundoSentido})
        const paradas = {
            paradasPrimerSentido: paradasPrimerSentido,
            paradasSegundoSentido: paradasSegundoSentido
        }
        res.send(paradas)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/paradasimple', cors(), async (req, res) => {
    try {
        if(!req.query.id){
            return res.send({
                error: 'Se debe pasar un id'
            })
        }
        const parada = await Parada.findById(req.query.id)
        res.send(parada)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/paradas', cors(), async (req, res) => {
    try {
        const paradas = await Parada.find({})
        res.send(paradas)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router