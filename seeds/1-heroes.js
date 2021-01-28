exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 99901, name: 'Mercy', role: 'Support' },
    { id: 99902, name: 'Junkrat', role: 'Damage' },
  
  ])
}
