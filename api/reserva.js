const express = require('express')
const db = require('../db/models/index')
const Sequelize = require('sequelize');

const ruta = express.Router()

ruta.get('/porvencer', async(req,res) => {
    let reservas = await db.vreserva.findAll({
        attributes : [ 'idreserva','idusuario','titulo','nombres','apellidos','fechareserva'],
        /*
        where: Sequelize.where(Sequelize.fn('datediff', sequelize.literal("day"), sequelize.col('fechareserva'), 
        sequelize.fn("getdate")), {
            [Op.gt]: 0
        })*/
    })
    res.status(200).json(reservas)
})

ruta.get('/maspedidos', async(req,res) => {
    let reservas = await db.vreserva.findAll({
        group: ['idlibro','titulo'],
        attributes: ['idlibro','titulo',[Sequelize.fn('COUNT', 'idlibro'), 'veces']],
        order: [
            ['veces', 'DESC']],
        limit: 2
    })
    res.status(200).json(reservas)
})


ruta.get('/ultimos', async(req,res) => {
    let reservas = await db.vreserva.findAll({
        attributes : [ 'idreserva','idusuario','titulo','nombres','apellidos','fechareserva'],
        limit: 2
    })
    res.status(200).json(reservas)
})

ruta.get('/todos', async(req,res) => {
    let reservas = await db.vreserva.findAll({
        attributes : [ 'idreserva','idusuario','titulo','nombres','apellidos','fechareserva'],
    })
    res.status(200).json(reservas)
})
module.exports = ruta