#181. Employees Earning More Than Their Managers

SELECT a.Name
FROM Employee AS a INNER JOIN Employee AS b
ON a.ManagerID = b.ID AND a.Salary > b.Salary
