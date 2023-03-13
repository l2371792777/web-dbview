/**
 * @description account api router
 */

const router = require('koa-router')()
const {createMes,selectMes }=require('../../controller/mesboard')

router.prefix('/api/mesboard')


router.post('/new', async (ctx, next) => {
    const { name,content } = ctx.request.body
    ctx.body=await createMes(name,content)
})

router.post('/list', async (ctx, next) => {
    ctx.body=await selectMes()
})
module.exports = router