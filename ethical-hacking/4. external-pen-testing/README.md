### External Penetration Testing

#### Traceroute

A traceroute works by sending Internet Control Message Protocol (ICMP) packets,
and every router involved in transferring the data gets these packets.

```bash
traceroute www.google.com
```

### Nmap

```bash
nmap -v --traceroute 104.210.194.254
nmap -T4 -sn [site_name] -v
nmap -T4 -v -PN -n -sS --top-ports 100 --max-parallelism 10 -oA nmapSYN [ip]
nmap -T4 -v -PN -n -sA --top-ports 100 --max-parallelism 10 -oA nmapSYN [ip]
```

```bash
ping www.pluralsight.com -c 3
hping3 -S www.pluralsight.com -p 80 -c 3
```
