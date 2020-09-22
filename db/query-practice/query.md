```sql
/* Create */
CREATE TABLE awards (
    id  INTEGER PRIMARY KEY,
    recipient TEXT NOT NULL,
    award_name TEXT DEFAULT 'grammy'
);

CREATE TABLE celebs(
    id INTEGER,
    name TEXT,
    age INTEGER
);

/* Add */
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin', 22);

/* Select */
SELECT * FROM celebs;
SELECT name from celebs;
SELECT name AS 'Titles' from movies;
SELECT DISTINCT genre from movies;
SELECT * FROM movies WHERE imdb_rating < 5;
SELECT * FROM movies WHERE name LIKE 'Se_en';
SELECT * FROM movies WHERE name LIKE '%man%';
SELECT name FROM movies WHERE imdb_rating IS NOT NULL;
SELECT * FROM movies WHERE name BETWEEN 'D' and 'G';
SELECT * FROM movies WHERE year BETWEEN '1970' and '1979';
SELECT * FROM movies WHERE year BETWEEN 1970 and 1979 AND imdb_rating > 8;
SELECT * FROM movies WHERE year > 2014 OR genre = 'action';
SELECT name, year, imdb_rating FROM movies ORDER BY imdb_rating DESC;
SELECT * FROM movies ORDER BY imdb_rating DESC LIMIT 3;
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END AS 'Review'
FROM movies;
SELECT COUNT(*) FROM fake_apps WHERE price = '0.0';
SELECT SUM(downloads) FROM fake_apps;
SELECT MAX(price) FROM fake_apps;
SELECT MIN(downloads) from fake_apps;
SELECT AVG(downloads) from fake_apps;
SELECT ROUND(AVG(price), 2) FROM fake_apps;
SELECT price, COUNT(*) FROM fake_apps WHERE downloads > 20000 GROUP BY price;
SELECT category, price, AVG(downloads) FROM fake_apps GROUP BY category, price;
SELECT category, price, AVG(downloads) FROM fake_apps GROUP BY 1, 2;
SELECT price, ROUND(AVG(downloads)), COUNT(*) FROM fake_apps GROUP BY price HAVING COUNT(*) > 10;
SELECT * FROM orders JOIN subscriptions ON orders.subscription_id = subscriptions.subscription_id;
SELECT * FROM orders JOIN subscriptions ON orders.subscription_id = subscriptions.subscription_id WHERE description = 'Fashion Magazine'
SELECT COUNT(*) FROM newspaper JOIN online ON newspaper.id = online.id;
SELECT * FROM newspaper LEFT JOIN online ON newspaper.id = online.id WHERE online.id IS NULL;
SELECT * from newspaper CROSS JOIN months;
SELECT month, COUNT(*) FROM newspaper CROSS JOIN months WHERE start_month <= month AND end_month >= month GROUP BY month;
SELECT * FROM newspaper UNION SELECT * FROM online;
WITH previous_query AS (
  SELECT customer_id, COUNT(subscription_id) AS 'subscriptions'
  FROM orders
  GROUP BY customer_id
)
SELECT customers.customer_name, previous_query.subscriptions FROM previous_query
JOIN customers
ON previous_query.customer_id = customers.customer_id;

/* Alter */
ALTER TABLE celebs ADD COLUMN twitter_handle TEXT;

/* Update */
UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4;

/* Delete */
DELETE FROM celebs
WHERE twitter_handle IS NULL;