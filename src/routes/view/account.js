/**
 * @description account view router
 */

const router = require('koa-router')()

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

module.exports = router