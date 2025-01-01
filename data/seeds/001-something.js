exports.seed = function(knex, Promise) {
    return knex('something')
      .truncate()
      .then(function() {
        return knex('something').insert([
          { name: 'Nico' },
          { name: 'The color green' },
          { name: 'Season 2 Episode 7' },
          { name: 'merry chimis' },
        ]);
      });
  };
  