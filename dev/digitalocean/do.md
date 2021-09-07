### Installing Postgres

```bash
sudo apt-get install postgresql
sudo apt-get install postgresql-contrib
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
sudo apt-get install build-essentials
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

- Add a domain name from the dropdown menu of the droplet

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

### Test Your Web Server

```bash
systemctl status nginx
```

### Add SSL Certification

```bash
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt install python3-certbot-nginx
```

### Adding Site Name to Nginx

```bash
sudo vim /etc/nginx/sites-available/default
```

...
server_name example.com www.example.com
...

```bash
sudo nginx -t
sudo systemctl reload nginx
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'
```

### Generating Certificates

```bash
sudo certbot --nginx -d example.com -d www.example.com
sudo certbot renew --dry-run
```

### Update Nginx Configuration

> Creating HTML and giving permssion to the folders

```bash
  sudo mkdir -p /var/www/example.com/html
  sudo chwon -R $USER:$USER /var/www/example.com/html
  sudo chmod -R 755 /var/www
```

> Edit Nginx

```bash
  sudo vim /etc/nginx/sites-available/default
```

> Configuration

```bash
  root /var/www/example.com/html;
```

> After Editing

```bash
  sudo nginx -t
  sudo systemctl reload nginx
```

### Running Backend

> index.js

```javascript
#!/usr/bin/env nodejs
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(8080, "localhost");
console.log("Server running at http://localhost:8080/");
```

```bash
chmod +x ./index.js
```

Install process manager for Node.js applications. PM2 provides
an easy way to manage and daemonize application (run theme in the background as a service)

```bash
npm install -g pm2
pm2 start index.js
pm2 stop [id]
```

> System Reboot

```bash
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu –hp /home/ubuntu
```

### Running Both Frontend and Backend

```bash
cd /etc/nginx/sites-available/
cp default sphotonkhan.com.conf
cp default api.sphotonkhan.com.conf
mv default default-back
```

```bash
sudo touch /etc/nginx/sites-available/domain.com.conf
sudo touch /etc/nginx/sites-available/api.domain.com.conf
or create just one configuration file
```

> Frontend

```
server {
   server_name domain.com www.domain.com;
   location / {
        proxy_pass http://localhost:4200;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
  }
}
```

> Backend

```
server {
  server_name api.domain.com;
    location /api {
    proxy_pass http://localhost:4000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

> Together

```
server {
  server_name api.domain.com;
    # Backend
    location /api {
    proxy_pass http://localhost:4000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

  # Frontend
   location / {
        root /var/www/example.com/html;
        index index.html
        try_files   $uri $uri/ /index.html;
  }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/api.domain.com.conf /etc/nginx/sites-enabled/api.domain.com.conf
sudo ln -s /etc/nginx/sites-available/domain.com.conf /etc/nginx/sites-enabled/domain.com.conf
sudo systemctl start nginx
```

### Integrating Postgress with Node

```bash
npm install pg
pm2 logs [id]
```

```javascript
const { Pool } = require('pg)
const http = require('http');
const pool = new Pool({
  ...configuration
})

const server = http.createServer(function (req, res) {
  pool.query('SELECT NOW()', (err, queryResponse) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  })
})

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
```


### Create new user in postgres

```bash
sudo -i -u postgres
createuser --interactive

[Logout from postgres]

sudo adduser photon
```