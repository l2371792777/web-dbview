/**
 *  @description 数据处理
 */

const { createAccountFailInfo, deleteAccountFailInfo, alterAccountFailInfo, selectAccountFailInfo } = require('../model/ErrorInfo')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { create, select, destroy, alter } = require('../server/account')


async function selectAccount({ id, account, mark, slug, typeId }) {
    const data = {
        id: id ? id : '',
        account: account ? account : '',
        mark: mark ? mark : '',
        slug: slug ? slug : '',
        typeId: typeId ? typeId : '',
    }
    const result = await select(data)
    if (!result) {
        return new ErrorModel(selectAccountFailInfo)
    }
    return new SuccessModel(result)
}

async function createAccount({ account, password, mark, remark, slug, typeId }) {
    const data = {
        account,
        password,
        mark,
        remark: remark ? remark : '',
        slug: slug ? slug : '',
        typeId: typeId ? typeId : '1',
    }

    const result = await create(data)
    if (!result) {
        return new ErrorModel(createAccountFailInfo)
    }
    return new SuccessModel()
}

async function alterAccount({ id, account, password, mark, remark, slug, typeId }) {

    let data = {id}
    if (account) {
        data.account = account
    }
    if (password) {
        data.password = password
    }
    if (mark) {
        data.mark = mark
    }
    if (remark) {
        data.remark = remark
    }
    if (slug) {
        data.slug = slug
    }
    if (typeId) {
        data.typeId = typeId
    }
    console.log("data...."+JSON.stringify(data))
    const result = await alter(data)
    if (!result) {
        return new ErrorModel(alterAccountFailInfo)
    }
    return new SuccessModel()
}

async function deleteAccount(id) {
    const result = await destroy(id)
    if (!result) {
        return new ErrorModel(deleteAccountFailInfo)
    }
    return new SuccessModel()
}

module.exports = {
    selectAccount,
    createAccount,
    deleteAccount,
    alterAccount
}
