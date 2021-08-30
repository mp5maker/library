```bash
sudo install postgresql
sudo install postgresql-contrib

sudo -i -u postgres
psql
CREATE DATABASE test;
\l
\c test
CREATE TABLE sample (id INT PRIMARY KEY, name VARCHAR(255), description VARCHAR(255));
SELECT column_name, data_type FROM infromation_schema.columns WHERE table_name = 'sample'
\q
exit

sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
vim ~/.bashrc
nvm install node --lts
nvm use 14.17.5
nvm alias default 14.17.5
```
