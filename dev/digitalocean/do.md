### Installing Postgres
```bash
sudo install postgresql
sudo install postgresql-contrib
```

### Testing Postgress
```bash
sudo -i -u postgres
psql
CREATE DATABASE test;
\l
\c test
CREATE TABLE sample (id INT PRIMARY KEY, name VARCHAR(255), description VARCHAR(255));
SELECT column_name, data_type FROM infromation_schema.columns WHERE table_name = 'sample'
\q
exit
```
### Installing NVM
```bash
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
vim ~/.bashrc
nvm install node --lts
nvm use 14.17.5
nvm alias default 14.17.5
```

### Accessing the remote PC using ssh
```bash
ssh root@{your-ip-address}
```

### Create new user (with limited access)
```bash
adduser photon
usermod -aG sudo photon
```

### Configure DNS on Digital Ocean

* Add a domain name from the dropdown menu of the droplet

```bash
whois http://sphotonkhan.com
```

### Install nginx
```bash
sudo apt-get update
sudo apt-get install nginx
```

### Adjust the firewall

Before we can test Nginx, we need to reconfigure our firewall software to allow access to the service.
Nginx registers itself as a service with ufw.

```bash
sudo ufw app list
```

```bash
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
```

```bash
ufw enable
sudo ufw allow 'Nginx HTTP'
sudo ufw status
```