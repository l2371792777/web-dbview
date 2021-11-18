const { Account,Type }= require('../model/model')

!(async function () {
    Account.destroy({
        where: {
            account:'test'
        }
    })
})()