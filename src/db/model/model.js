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
        comment:'备注'
    },
    userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        comment:'用户id'
    },
    typeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue:1,
        comment:'类型'
    }
})

const User=seq.define("user",{
    userName:{
        type:Sequelize.STRING,
        allowNull:false,
        comment:"用户名"
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
        comment:"密码"
    },
    grade:{
        type:Sequelize.INTEGER,
        allowNull:false,
        comment:"权限"
    }
})


Type.hasMany(Account,{
    foreignKey:'typeId'
})
User.hasMany(Account,{
    foreignKey:'userId'
})

Account.belongsTo(User,{
    foreignKey:'userId'
})
Account.belongsTo(Type,{
    foreignKey:'typeId'
})

module.exports = {
    Account,
    Type,
    User
}