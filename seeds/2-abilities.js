exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 88801, name: 'Caduceus Staff', hero_id: hero.id },
    { id: 88802, name: 'Guardian Angel', here_id: hero.id },
    { id: 88803, name: 'Resurrect', hero_id: hero.id },
    { id: 88804, name: 'Valkyrie', hero_id: hero.id },
    { id: 88805, name: 'Concussion Mine', hero_id: hero.id },
    { id: 88806, name: 'Steel Trap', hero_id: hero.id },
    { id: 88807, name: 'Riptire', hero_id: hero.id }
  ])
}
