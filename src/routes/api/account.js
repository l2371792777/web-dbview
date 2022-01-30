/**
 * @description account api router
 */

const router = require('koa-router')()
const { selectAccount, createAccount, deleteAccount, alterAccount } = require('../../controller/account')
const { alter } = require('../../server/account')

router.prefix('/api/account')

router.post('/list', async (ctx, next) => {
    const { id, account, mark, slug, typeId } = ctx.request.body
    ctx.body = await selectAccount({ id, account, mark, slug, typeId })
})

router.post('/new', async (ctx, next) => {
    const { account, password, mark, remark, slug, typeId } = ctx.request.body
    ctx.body = await createAccount({ account, password, mark, remark, slug, typeId })
})

router.post('/delete', async (ctx, next) => {
    const { id } = ctx.request.body
    ctx.body = await deleteAccount(id)
})
router.post('/alter', async (ctx, next) => {
    const { id, account, password, mark, remark, slug, typeId } = ctx.request.body
    ctx.body = await alterAccount({ id, account, password, mark, remark, slug, typeId })
})

module.exports = router