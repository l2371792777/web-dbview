/**
 * @description message board router
 */

const router = require('koa-router')()

router.get('/mesboard', async (ctx,next) => {
    await ctx.render('messageboard')
})

module.exports = router