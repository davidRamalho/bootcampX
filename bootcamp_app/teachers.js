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

const cohort = process.argv[2];
pool.query('SELECT teachers.name as teacher, cohorts.name as cohort FROM teachers JOIN assistance_requests ON teachers.id = teacher_id JOIN students ON students.id = student_id JOIN cohorts ON cohorts.id = cohort_id WHERE cohorts.name = $1 GROUP BY teacher, cohort ORDER BY teacher;', [cohort])
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}:  ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));