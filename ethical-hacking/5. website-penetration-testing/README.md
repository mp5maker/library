### Website Penetration Test

#### Web Application Firewall (WAF)

WAFW00F allows one to identify and fingerprint Web Application Firewall (WAF) products protecting a website

```bash
  wafw00f [site_name]
  wafw00f http://www.ethicalhackingblog.com
```

### Load Balancing Check

lbd (load balancing detector) detects if a given domain uses DNS and/or HTTP Load-Balancing (via Server: and Date: header and diffs between server answers).

```bash
lbd [site_name]
lbd www.ethicalhackingblog.com
```

### Webcrawler

#### Website Crawling

* Burpsuite Proxy
* Use FoxyProxy
* Use metasploitable
* Burp Spider
* Burp Discover Content


```bash
sudo apt-get install burpsuite
```
