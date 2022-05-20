const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const redisStore = require('koa-redis')
const session = require('koa-generic-session')
const path = require('path')
const koaStatic = require('koa-static')

const userApiRouter=require('./routes/api/user')
const accountViewRouter = require('./routes/view/account')
const accountApiRouter = require('./routes/api/account')

const { SESSION_SECRET_KEY } = require('./conf/constants')
const { REDIS_CONF } = require('./conf/db')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koaStatic(path.join(__dirname + '/public')))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

//session
app.keys = [SESSION_SECRET_KEY]
app.use(session({
  key: 'cookie.sid',
  prefix: 'db-passwd:session:',
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
  },
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

// routes
app.use(accountViewRouter.routes(), accountViewRouter.allowedMethods())
app.use(accountApiRouter.routes(), accountApiRouter.allowedMethods())
app.use(userApiRouter.routes(), userApiRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
