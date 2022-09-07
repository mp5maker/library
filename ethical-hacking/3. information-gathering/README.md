### Google Filters

- cache
- filetype
- info
- intitle
- inurl
- site

### Search

filetype:pdf site:[site_name]

### Learn about the website

```bash
www.dnsstuff.com/tools
```

---

### Metagoofil

Metagoofil is an information gathering tool designed for extracting metadata of public documents (pdf,doc,xls,ppt,docx,pptx,xlsx) belonging to a target company. Metagoofil will perform a search in Google to identify and download the documents to local disk.

#### Install Metagoofil

```bash
sudo apt-get install -f metagoofil
```

#### Run Command

```bash
metagoofil -d [site_name] -t [file_type] -o [folder_name] -f [file_name]
metagoofil -d goodhacking.org -t doc -o temp -f goodhacking.html
```

---

### Harvester
theHarvester is a command-line tool included in Kali Linux that acts as a wrapper for a variety of search engines and is used to find email accounts, subdomain names, virtual hosts, open ports / banners, and employee names related to a domain from different public sources (such as search engines and PGP key servers).

```bash
theHarvester -d [site_name] -b [search] -l [limit]
theHarvester -d goodhackingblog.com -b google -l 100
```


### Whois
This package provides a commandline client for the WHOIS (RFC 3912) protocol, which queries online servers for information such as contact details for domains and IP address assignments.

```bash
whois [site_name]
whois ethicalhackingblog.com
```


### DNS Reconnaissance

```bash
fierce -dns [sitename]
fierce --domain [sitename]
fierce -dns [ethicalhackingblog.com]
fierce --domain [ethicalhackingblog.com]
```

### Deepmagic information gathering tool (dmitry)

```bash
dmitry -winsepfbo [site_name]
dmitry -winsepfbo ethicalhackingblog.com
```


### Discover Scripts

```bash
git clone https://github.com/leebaird/discover.git
./discover.sh
```

### Recon-ng

```bash
recong-ng
help
show modules
show keys
marketplace search
marketplace install ipinfodb
keys add [ipinfodb_key]
```

```bash
load ipinfodb
show info
workspace add [name]
add domains [domain_name]
load bing_domain_web
run
show hosts
```

### Built with

```bash
https://builtwith.com
```