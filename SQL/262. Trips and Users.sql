#262. Trips and Users

SELECT total.date AS Day, IFNULL(ROUND(cancelled.count / total.count, 2), 0) AS 'Cancellation Rate'
FROM(SELECT Count(t1.ID) AS count, t1.Request_at AS Date
	FROM Trips t1, Users u1
	WHERE t1.Client_ID = u1.Users_ID AND u1.Banned = 'No'
	Group By Date) total LEFT JOIN
	(SELECT Count(t2.ID) AS count, t2.Request_at AS Date
	FROM Trips t2, Users u2
	WHERE t2.Client_ID = u2.Users_ID AND u2.Banned = 'No' AND t2.Status <> 'completed'
	Group By Date) cancelled
ON total.Date = cancelled.Date 
WHERE total.Date BETWEEN '2013-10-01' AND '2013-10-03';