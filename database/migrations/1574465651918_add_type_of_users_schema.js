'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddTypeOfUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('type', 20).notNullable()
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('type')
    })
  }
}

module.exports = AddTypeOfUsersSchema
