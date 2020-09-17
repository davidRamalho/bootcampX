const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect(() => {
  console.log('Connected to the database');
})
const limit = process.argv[3];
const cohort = process.argv[2];
pool.query('SELECT students.name as name, students.id as student_id, cohorts.name as cohort FROM students JOIN cohorts ON cohort_id = cohorts.id WHERE cohorts.name LIKE $1::varchar LIMIT $2::int;', [`%${cohort}%`, limit])
.then(res => {
  res.rows.forEach(user => {
    console.log(res.rows);
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));