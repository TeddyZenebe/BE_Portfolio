const db = require('./dbConfig.js')

module.exports = {
  add,
  find,
  remove,
};

function find() {
  return db('contactTbl')
}

function add(payload) {

  return db('contactTbl').insert(payload);
}

function remove(id) {
  return db('contactTbl').where('id', id).first().del()
}