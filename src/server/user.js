/**
 * @description 用户 数据库交互
 */

const {User} =require('../db/model/model')


/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function getUserInfo(userName,password){
    const whereOpt = {
        userName
    }
    if (password) {
        Object.assign(whereOpt, { password })
    }
    const result = await User.findOne({
        attributes: ['id', 'userName', 'grade'],
        where: whereOpt
    })
    if (result == null) {
        return result
    }

    return result.dataValues
}

module.exports={
    getUserInfo
}