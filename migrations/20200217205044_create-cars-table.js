
//data for cars NEEDED: VIN, make, model, mileage.
//OPTIONAL data to be inserted later: transmission type, status of title
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('VIN')
            .notNullable()
            .unique();
        tbl.text('make')
            .notNullable();
        tbl.text('model')
            .notNullable();
        tbl.integer('mileage')
            .notNullable();
        tbl.text('transmission type');
        tbl.text('title status');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
