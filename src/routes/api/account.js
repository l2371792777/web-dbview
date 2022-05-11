/**
 * @description account api router
 */

const router = require('koa-router')()
const { selectAccount, createAccount, deleteAccount, alterAccount } = require('../../controller/account')

router.prefix('/api/account')


router.post('/list', async (ctx, next) => {
    const { id, account, mark, typeId } = ctx.request.body
    let userName="ayanami"
    ctx.body = await selectAccount({ id, account,userName, mark, typeId })
})

router.post('/new', async (ctx, next) => {
    const { account, password, mark, typeId } = ctx.request.body
    let userName="ayanami"
    ctx.body = await createAccount({ account, password, mark, userName, typeId })
})

router.post('/delete', async (ctx, next) => {
    const { id } = ctx.request.body
    ctx.body = await deleteAccount(id)
})
router.post('/alter', async (ctx, next) => {
    const { id, account, password, mark, typeId } = ctx.request.body
    ctx.body = await alterAccount({ id, account, password, mark, typeId })
})

module.exports = router