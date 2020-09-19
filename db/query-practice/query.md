CREATE TABLE celebs(
    id INTEGER,
    name TEXT,
    age INTEGER
);

SELECT * FROM celebs;
SELECT name from celebs;

INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin', 22);

ALTER TABLE celebs ADD COLUMN twitter_handle TEXT;

UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4;

DELETE FROM celebs
WHERE twitter_handle IS NULL;

CREATE TABLE awards (
    id  INTEGER PRIMARY KEY,
    recipient TEXT NOT NULL,
    award_name TEXT DEFAULT 'grammy'
);