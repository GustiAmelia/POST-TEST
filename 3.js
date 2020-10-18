const queryString = `SELECT name, distance_traveled, total_fares
FROM users AS u
JOIN (SELECT user_id, SUM(distance) as distance_traveled, SUM(fare) as total_fares FROM rides GROUP by user_id) as r
ON u.id = r.user_id
ORDER by distance_traveled DESC
limit 10`