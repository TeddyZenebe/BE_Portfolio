
exports.up = function(knex) {
    return knex.schema.createTable('contactTbl', col => {
        col.increments();
        col.string('FullName', 50).notNullable();
        col.string('Email', 50).notNullable();
        col.string('Message', 255).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contactTbl');
};
