#177. Nth Highest Salary
SET N = N - 1;
SELECT *
FROM (
	SELECT DISTINCT Salary
	FROM Employee
	ORDER BY Salary DESC
	Limit N, 1
	) s