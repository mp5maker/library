### MySQL ###
sudo apt-get install mysql-server mysql-client libmysqlclient-dev
UPDATE mysql.user SET authentication_string = PASSWORD('password') WHERE User = 'root';
FLUSH PRIVILEGES;

### APACHE ###
sudo apt-get install apache2 apache2-doc apache2-npm-prefork apache2-utils libexpat1 ssl-cert
sudo apt-get install libapache2-mod-php7.0 php7.0 php7.0-common php7.0-curl php7.0-dev php7.0-gd php-pear php-imagick php7.0-mcrypt php7.0-mysql php7.0-ps php7.0-xsl

### PHPMYADMIN ###
sudo apt-get install phpmyadmin
sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf
sudo a2enconf phpmyadmin.conf
sudo service apache2 reload
