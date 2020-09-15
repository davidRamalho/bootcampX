SELECT cohorts.name AS cohort_name, COUNT(students.name) AS student_count
FROM cohorts JOIN students ON cohorts.id = cohort_id
GROUP BY cohorts.name
HAVING COUNT(students.name) >= 18
