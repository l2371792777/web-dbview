const { Account,User, Type } = require('../model/model')

!(async function () {
  Account.bulkCreate(
    [{
      account: 'shiny324',
      password: 'shiny@324',
      mark: '百度云',
      typeId: 1,
      userId: '1'
    }
    ]
  )
 
    
})()