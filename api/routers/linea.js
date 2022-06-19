const express = require('express')
const cors = require('cors');
const router = new express.Router()
const Linea = require('../models/linea');

router.get('/api/lineas', cors(), async (req, res) => {
    try {
        const lineas = await Linea.find({})
        lineas.sort(function (a, b) {
            const pa = a.nombre.split(" ")
            const pb = b.nombre.split(" ")
            return pa[1] - pb[1]
        });
        res.send(lineas)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router