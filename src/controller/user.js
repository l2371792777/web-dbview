/**
 * @description user 数据处理
 */

 const { getUserInfo} = require('../server/user')
 const { SuccessModel, ErrorModel } = require('../model/ResModel')
 const {
    userPasswordErrorInfo, updateUserPasswordFailInfo, updateUserFailInfo, registerUserNameNotExistInfo, registerUserNameExistInfo, registerFailInfo, userLoginFailInfo, deleteUserFailInfo
} = require('../model/ErrorInfo')


async function login(ctx,userName,password){
    const userInfo=await getUserInfo(userName,password)
    if(!userInfo){
        return new ErrorModel(userLoginFailInfo)
    }
    ctx.session.userInfo=userInfo
    return new SuccessModel()
}

module.exports={
    login
}