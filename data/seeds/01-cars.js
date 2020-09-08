
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '12345786', make:'Ford', model:'Mustang', mileage:'700'},
        {VIN: '22253645', make:'Mitubishi', model:'Mirage', mileage:'8005'},
        {VIN: '54789658', make:'Chevy', model:'Tahoe', mileage:'3526' }
      ]);
    });
};
