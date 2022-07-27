/**
 * @description account view router
 */

const router = require('koa-router')()
const { loginRedirect } = require('../../middleware/loginCheck')

router.get('/',loginRedirect, async (ctx,next) => {
    await ctx.render('index')
})
router.get('/new',loginRedirect, async (ctx,next) => {
    await ctx.render('new')
})
router.get('/alter',loginRedirect, async (ctx,next) => {
    await ctx.render('alter')
})
router.get('/list',loginRedirect, async (ctx,next) => {
    await ctx.render('list')
})
router.get('/login', async (ctx,next) => {
    await ctx.render('login')
})

module.exports = router