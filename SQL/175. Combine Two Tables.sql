#175. Combine Two Tables

SELECT a.FirstName, a.LastName, b.City, b.State
FROM Person AS a LEFT JOIN Address AS b
ON a.PersonID = b.PersonID