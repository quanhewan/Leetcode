#178. Rank Scores

SELECT 
	Score, 
	(SELECT COUNT(*) + 1
		FROM (SELECT DISTINCT s1.Score AS s
			FROM Scores s1) s2
		WHERE s2.s > Score) rank
FROM Scores
ORDER BY Score DESC
