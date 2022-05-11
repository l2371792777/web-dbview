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

async function create({ account, password, mark, userName, typeId = 1 }) {
    // TODO 查找userId
    let userId=1
    const result = await Account.create(
        {
            account,
            password,
            mark,
            userId:userId,
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

async function select({ id, account, mark, userName, typeId }) {
    // TODO 查找userId
    // 连表查询
    console.log(userName)
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
                    userName:userName
                }
            }
        ]
    })
    return result
}

module.exports = {
    destroy,
    create,
    select,
    alter
}