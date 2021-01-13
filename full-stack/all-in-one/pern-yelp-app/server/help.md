### Command ###

For help

```
  \?
```

List of Database

```
\l
```

Change Database

```
\c [database_name]

```

### CREATE EXTENSION ###

create extension if not exists "uuid-ossp";


### SQL ###
Create Database

```
CREATE DATABASE [database_name];
```

Delete Database

```
DROP DATABASE [database_name];
```



Create Table

```
CREATE TABLE products {
  id INT,
  name VARCHAR(255),
  price INT,
  on_sale BOOLEAN,
};
```


ALTER TABLE [ADD]

```
  ALTER TABLE products
  ADD COLUMN featured BOOLEAN;
```

ALTER TABLE [DELETE]

```
  ALTER TABLE products
  DROP COLUMN featured;
```