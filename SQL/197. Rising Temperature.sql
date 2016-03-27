#197. Rising Temperature

SELECT a.ID
FROM Weather AS a INNER JOIN Weather AS b
ON DATEDIFF(a.Date, b.Date) = 1 AND a.Temperature > b.Temperature