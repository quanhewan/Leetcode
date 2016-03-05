#Employees Earning More Than Their Managers

SELECT employee.Name
FROM  Employee employee 
INNER JOIN Employee manager 
ON (employee.ManagerId = manager.Id )
WHERE employee.Salary > manager.Salary;


#Duplicate Emails

SELECT DISTINCT Email 
FROM Person
GROUP BY Email 
HAVING COUNT(*) > 1;


#Combine Two Tables

SELECT FirstName, LastName, City, State
FROM Person
LEFT JOIN Address
ON Person.PersonID = Address.PersonID;


#Customers Who Never Order

SELECT Name
FROM Customers
LEFT JOIN Orders
ON Customers.Id = Orders.CustomerID
WHERE CustomerID IS NULL;

#Rising Temperature

SELECT today.Id
FROM Weather today
INNER JOIN Weather yesterday
ON DATEDIFF(today.Date, yesterday.Date) = 1
WHERE today.Temperature > yesterday.Temperature;

#Second Highest Salary

SELECT 
(SELECT distinct Salary  
FROM Employee
ORDER BY Salary
LIMIT 1, 1)
AS SecondHighestSalary;

#Delete Duplicate Emails
DELETE b
FROM Person a
JOIN Person b
ON a.Email = b.Email
WHERE b.ID > a.ID;

#Consecutive Numbers
SELECT DISTINCT a.Num
FROM Logs a
LEFT JOIN Logs b ON a.Id = b.ID - 1
LEFT JOIN Logs c ON b.ID = c.ID - 1
WHERE a.Num = b.Num AND b.Num = c.Num;

#Rank Scores

SELECT Scores.Score AS Score, IFNULL(q3.Rank, 0)+1 AS Rank
    FROM Scores
    LEFT JOIN 
         (SELECT q1.Score AS Score, COUNT(*) AS Rank
            FROM (SELECT DISTINCT Scores.Score AS Score
                    FROM Scores
                    ORDER BY Score DESC) AS q1
            JOIN
                 (SELECT DISTINCT Scores.Score AS Score
                    FROM Scores
                    ORDER BY Score DESC) AS q2
            ON q1.Score < q2.Score
            GROUP BY Score
            ORDER BY Score DESC) AS q3
    ON q3.Score = Scores.Score
    ORDER BY Score DESC;

#Department Highest Salary
SELECT ed.deptName, e2.Name, e2.Salary
FROM Employee e2
INNER JOIN 
(SELECT e1.DepartmentID as deptID, d1.Name as deptName, MAX(e1.salary) as maxSalary
FROM Employee e1
INNER JOIN Department d1
ON e1.DepartmentId = d1.Id
GROUP BY e1.DepartmentId) ed
ON e2.salary = ed.maxSalary AND e2.DepartmentId = ed.deptID
ORDER BY ed.maxSalary;

#Nth Highest Salary
select  IF(count(*) >= N, Min(rank.Salary), NULL) salary
from (select distinct salary
      from Employee     
      order by salary desc
      limit N
 ) rank


#Trips and Users
SELECT a.time1 as Day, IFNULL(ROUND(b.count/a.count_all, 2),0) as Rate
FROM (SELECT t1.Request_at as time1, count(t1.iD) as count_all
FROM Trips t1
LEFT JOIN Users u1
ON t1.Client_Id = u1.Users_ID
WHERE DATEDIFF(t1.Request_at, '2013-10-01') >= 0 AND DATEDIFF(t1.Request_at, '2013-10-03') <= 0 AND u1.Banned = 'No'
GROUP BY t1.Request_at) a
LEFT JOIN 
(SELECT t2.Request_at as time2, count(t2.iD) as count
FROM Trips t2
INNER JOIN Users u2
ON t2.Client_Id = u2.Users_ID
WHERE (DATEDIFF(t2.Request_at, '2013-10-01') >= 0 AND DATEDIFF(t2.Request_at, '2013-10-03') <= 0) AND (t2.Status = 'cancelled_by_driver' OR t2.Status = 'cancelled_by_client') AND u2.Banned = 'No' 
GROUP BY t2.Request_at) b
ON a.time1 = b.time2;

#Department Top Three Salaries
