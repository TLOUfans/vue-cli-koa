'user strict'

const model = require('../database/model.js')

let user = model('users')

const addUser = async function (ctx) {
  let data = ctx.request.body;
  let addUser = new user({
    code: data.code,
    name: data.name,
    password: data.password,
    regDate: new Date()
  })
  let result = await addUser.save().catch(err => err)
  ctx.body = {
    success: true,
    info: result
  }
}

const list = async function (ctx) {
  let data = ctx.request.body;
  let result = await user.find().catch(err => err)
  ctx.body = {
    success: true,
    info: result
  }
}

module.exports = {
  addUser,
  list
}