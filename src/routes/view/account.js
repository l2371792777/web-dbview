/**
 * @description account view router
 */

const router = require('koa-router')()

//后续加入登录机制
router.get('/', async (ctx,next) => {
    await ctx.render('index')
})
router.get('/new', async (ctx,next) => {
    await ctx.render('new')
})
router.get('/delete', async (ctx,next) => {
    await ctx.render('delete')
})
router.get('/alter', async (ctx,next) => {
    await ctx.render('alter')
})
router.get('/list', async (ctx,next) => {
    await ctx.render('list')
})
router.get('/login', async (ctx,next) => {
    await ctx.render('login')
})

module.exports = router