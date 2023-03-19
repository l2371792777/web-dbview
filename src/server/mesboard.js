/**
 * @description mesboard 数据库
 */

const { Message } = require('../db/model/model')
const { Sequelize } = require('sequelize')

/**
 * 删除账号信息
 * @param {int} id 
 */
async function destroy(id) {
    const result = await Message.destroy({
        where: {
            id: id
        }
    })
    return result > 0
}

async function create({ name,content }) {
    const result = await Message.create(
        {
            name,
            content
        }
    )

    return result.dataValues
}

async function select() {
    const result = Message.findAll({
        attributes: ['id', 'name', 'createdAt','content'],
        order:[
            ['createdAt','DESC']
        ]
    })
    return result
}

module.exports = {
    destroy,
    create,
    select
}