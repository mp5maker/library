-- CREATE DATABASE
CREATE DATABASE jwttutorial;

-- CREATE TABLE
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  alias uuid DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- CREATE A DATA
INSERT INTO users(
  name,
  email,
  password
) VALUES (
  'John Doe',
  'john_doe@gmail.com',
  'test123'
);