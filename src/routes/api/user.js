/**
 * @description user api
 */

const { loginCheckFailInfo } = require('../../model/ErrorInfo')

const router = require('koa-router')()

router.prefix("/api/user")

router.post('/login', async (ctx,next)=>{
    const {userName,password}=ctx.request.body
    ctx.body=await loginCheckFailInfo(ctx,userName,password)
})

module.exports=router