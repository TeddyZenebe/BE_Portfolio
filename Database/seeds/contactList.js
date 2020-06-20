
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contactTbl').del()
    .then(function () {
      // Inserts seed entries
      return knex('contactTbl').insert([
        { FullName: 'Teddyy', Email: 'ted@yahoo.com', Message: 'hello teddyyy you may do it'},
        { FullName: 'Sent', Email: 'sent@gmail.com', Message: 'hijfjkhksdfhhgvjkdbvjkhdfv'},
        { FullName: 'rowValue3', Email: 'sent@gmail.com', Message: 'hello bela bela bela'}
      ]);
    });
};
