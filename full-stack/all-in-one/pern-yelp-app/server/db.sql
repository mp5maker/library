CREATE DATABASE yelp;

CREATE TABLE restaurants (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  alias uuid DEFAULT uuid_generate_v4(),
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

SELECT * FROM restaurants;

INSERT INTO restaurants (name, location, price_range) values ('mcdonalds', 'new yorks', 3);
INSERT INTO restaurants (name, location, price_range) values ('pizza hut', 'vegas', 2);

CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(255) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >= 1 and rating <= 5)
);