/**
 * @description user 数据处理
 */

const { getUserInfo } = require('../server/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
    userLoginFailInfo
} = require('../model/ErrorInfo')


async function login(ctx, userName, password) {
    const userInfo = await getUserInfo(userName, password)
    if (!userInfo) {
        return new ErrorModel(userLoginFailInfo)
    }
    if (userInfo.userName !== userName || userInfo.password !== password) {
        return new ErrorModel(userLoginFailInfo)
    }
    delete userInfo.password
    ctx.session.userInfo = userInfo
    return new SuccessModel()
}

module.exports = {
    login
}