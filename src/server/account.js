/**
 * @description account数据库操作
 */

const { Account } = require('../db/model/model')
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

async function select({ id, account, mark, slug, typeId }) {
    const result = Account.findAll({
        where: {
            id: { [Sequelize.Op.like]: `%${id}%` },
            account: { [Sequelize.Op.like]: `%${account}%` },
            mark: { [Sequelize.Op.like]: `%${mark}%` },
            typeId: { [Sequelize.Op.like]: `%${typeId}%` },
        }
    })
    return result
}

module.exports = {
    destroy,
    create,
    select,
    alter
}