#180. Consecutive Numbers

SELECT DISTINCT l1.Num
FROM Logs l1, Logs l2, Logs l3
WHERE l1.ID = l2.ID + 1 AND l2.ID = l3.ID + 1 AND l1.Num = l2.Num AND l2.Num = l3.Num