/**
 * @description 登陆验证
 */

 const { ErrorModel } = require('../model/ResModel')
 const { loginCheckFailInfo, loginRedirectFailInfo } = require('../model/ErrorInfo')

 
async function loginCheck(ctx,next){
    if(ctx.session.userInfo){
        await next()
        return 
    }
    
}