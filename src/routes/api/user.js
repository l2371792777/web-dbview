/**
 * @description user api
 */

const router = require('koa-router')()

router.prefix("/api/user")

router.post('/login', async (ctx,next)=>{

})

module.exports=router