/**
 * @description account数据库操作
 */

const { Account,User } = require('../db/model/model')
const { Sequelize } = require('sequelize')

/**
 * 删除账号信息
 * @param {int} id 
 */
async function destroy(id) {
    const result = await Account.destroy({
        where: {
            id: id
        }
    })
    return result > 0
}

async function create({ account, password, mark, userId, typeId = 1 }) {

    const result = await Account.create(
        {
            account,
            password,
            mark,
            userId,
            typeId
        }
    )

    return result.dataValues
}

async function alter(data) {
    const id = data.id
    delete data.id
    const result = await Account.update(data, {
        where: {
            id: id
        }
    })
    return result > 0
}

async function select({ id, account, mark, userId, typeId }) {
    // 连表查询
    console.log(userId)
    const result = Account.findAll({
        where: {
            id: { [Sequelize.Op.like]: `%${id}%` },
            account: { [Sequelize.Op.like]: `%${account}%` },
            mark: { [Sequelize.Op.like]: `%${mark}%` },
            typeId: { [Sequelize.Op.like]: `%${typeId}%` },
        },
        include:[
            {
                model:User,
                where:{
                    id:userId
                }
            }
        ]
    })
    return result
}

async function idTouserId(id){
    const result=Account.findOne({
        where:{
            id:id
        }
    })
    console.log("_____ "+result)
    return result.dataValues
}

module.exports = {
    destroy,
    create,
    select,
    alter,
    idTouserId
}