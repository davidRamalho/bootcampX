SELECT SUM(assignment_submissions.duration) AS total_duration
FROM assignment_submissions 
JOIN students ON students.id = student_id
WHERE students.id IN (SELECT students.id 
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'FEB12');