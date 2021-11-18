const Sequelize = require('sequelize')
const seq = require('../seq')


const Type=seq.define('type',{
    type:{
        type:Sequelize.STRING,
        allowNull:null
    }
})


const Account = seq.define('account', {
    account: {
        type: Sequelize.STRING,
        allowNull: false,
        comment:'账号'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment:'密码'
    },
    mark: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment:'归属'
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:true,
        comment:'关键字段'
    },
    remark: {
        type: Sequelize.STRING,
        allowNull: true,
        comment:'备注'
    },
    typeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue:1,
        comment:'类型'
    }
})


Type.hasMany(Account,{
    foreignKey:'typeId'
})

module.exports = {
    Account,
    Type
}