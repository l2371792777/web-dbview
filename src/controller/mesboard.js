/**
 * @description mesboard 数据处理
 */

const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { create,select } = require('../server/mesboard')
const {
    createMesFailInfo
} = require('../model/ErrorInfo')


async function createMes(name, content) {
    const data = {
        name,
        content
    }
    const result = await create(data)
    if (!result) {
        return new ErrorModel(createMesFailInfo)
    }
    return new SuccessModel()
}
async function selectMes() {
    const result = await select()
    if (!result||result.length===0) {
        return new ErrorModel(selectAccountFailInfo)
    }
    return new SuccessModel(result)
}
module.exports = {
    createMes,
    selectMes
}