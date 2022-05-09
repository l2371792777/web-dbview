const seq = require('../seq')
 require('../model/model')

seq.authenticate().then(() => {
    console.log('ok')
}).catch(() => {
    console.log('error')
})

seq.sync({ force: true }).then(() => {
    process.exit()
})