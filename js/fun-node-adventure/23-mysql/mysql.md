### INSTALLATION ###
sudo apt install mysql-server

### CONFIGUARTION ###
sudo mysql_secure_installation (optional)

### My SQL DEFAULT PORT ###
3306

### CONFIGURING ROOT ###
sudo mysql

```sql
    SELECT user,authentication_string,plugin,host FROM mysql.user; [Socket to Password]
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
    FLUSH PRIVILEGES;

    CREATE USER 'test'@'localhost' IDENTIFIED BY '123';
    GRANT ALL PRIVILEGES ON *.* TO 'test'@'localhost' WITH GRANT OPTION;
```