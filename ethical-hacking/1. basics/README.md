## Ethical Hacking


### Get Kali Linux

Kali linux, previously called backtrack


### Update Kali Linux

```bash
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
```

### Kali Update in Shell Script
```bash
chmod +x kali_update.sh
```

### Remove Package
```bash
sudo-apt-get remove [package_name]
```

### List of Packages
```bash
dpkg l
dpkg l | grep 'zip'
```

### List of sources

```bash
vim  /etc/apt/sources.list
```

### Install Tor

```bash
sudo apt-get install tor
vim /etc/proxychains4.conf
```

### Change settings in proxychains

```bash
# strict_chain
dynamic_chain

socks5 127.0.0.1 9050
```

### Start Tor Service

```bash
sudo service tor start
sudo service tor status
firefox https://whatismyip.com
proxychains4 firefox https://whatismyip.com
```

### Scan you system with rootkits

```bash
chkrootkit
```