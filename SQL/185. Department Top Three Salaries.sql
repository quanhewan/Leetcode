#185. Department Top Three Salaries

SELECT d.Name, e.Name, e.Salary
FROM Employee e INNER JOIN Department d 
ON e.DepartmentID = d.ID 
WHERE (SELECT COUNT(*) FROM (SELECT DISTINCT Salary, DepartmentID FROM Employee) temp
		WHERE e.DepartmentID = temp.DepartmentID AND temp.Salary > e.Salary) < 3

