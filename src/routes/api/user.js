/**
 * @description user api
 */

const router = require('koa-router')()
const {login}=require('../../controller/user')


router.prefix("/api/user")

router.post('/login', async (ctx,next)=>{
    const {userName,password}=ctx.request.body
    ctx.body = await login(ctx, userName, password)
})

module.exports=router