/**
 * @description account api router
 */

const router = require('koa-router')()
const { selectAccount, createAccount, deleteAccount, alterAccount } = require('../../controller/account')
const {loginCheck}=require("../../middleware/loginCheck")

router.prefix('/api/account')


router.post('/list',loginCheck, async (ctx, next) => {
    const { id, account, mark, typeId } = ctx.request.body
    let userId=ctx.session.userInfo.id
    ctx.body = await selectAccount({userId, id, account, mark, typeId })
})

router.post('/new',loginCheck, async (ctx, next) => {
    const { account, password, mark, typeId } = ctx.request.body
    let userId=ctx.session.userInfo.id
    ctx.body = await createAccount({ userId,account, password, mark, typeId })
})

router.post('/delete',loginCheck, async (ctx, next) => {
    const { id } = ctx.request.body
    const userId=ctx.session.userInfo.id
    ctx.body = await deleteAccount(userId,id)
})
router.post('/alter',loginCheck, async (ctx, next) => {
    const { id, account, password, mark, typeId } = ctx.request.body
    const userId=ctx.session.userInfo.id
    ctx.body = await alterAccount({ userId,id, account, password, mark, typeId })
})

module.exports = router