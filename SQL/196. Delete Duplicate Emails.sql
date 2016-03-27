#196. Delete Duplicate Emails

DELETE p2
FROM Person AS p1, Person as p2
WHERE p1.Email = p2.Email AND p1.id < p2.id