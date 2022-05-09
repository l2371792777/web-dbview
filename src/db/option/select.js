const { Sequelize } = require('sequelize')
const { Account } = require('../model/model')

!(async function () {


    const test = await Account.findAll({
        where: {
            
        }
    })
    test.map(data => {
        data = data.dataValues
        console.log(data)
    })


})()