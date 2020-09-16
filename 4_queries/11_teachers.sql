select day, SUM(number_of_assignments) AS number_of_assignments, SUM(sum) AS duration
FROM (SELECT day, COUNT(assignments) AS number_of_assignments, SUM(duration)
FROM assignments
GROUP BY day, duration
ORDER BY day) MyTable
GROUP BY MyTable.day