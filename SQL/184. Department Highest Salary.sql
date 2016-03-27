184. Department Highest Salary

SELECT Department.Name AS Department, Employee.Name AS Employee, max.Salary AS Salary
FROM Department, Employee,
(SELECT MAX(Salary) AS Salary, DepartmentID
FROM Employee
Group BY DepartmentID) max
WHERE Department.ID = max.DepartmentID AND Department.ID = Employee.DepartmentID AND Employee.Salary = max.Salary