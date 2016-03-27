#183. Customers Who Never Order

SELECT a.Name
FROM Customers as a LEFT JOIN Orders as b
ON a.ID = b.CustomerID
WHERE b.ID IS NULL