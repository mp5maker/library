### Cyber Security

#### Mac Address

```bash
ifconfig -a
```

Look for HWaddr or ether or lladdr


HWaddr: 08:00:25 2e:5b:59

**08:00:25** 3 bytes => Organization Unique Identifier
**2e:5b:59** 3 bytes => Network Interface Controller

### Change the mac address

```bash
sudo apt-get install -y macchanger
sudo ifconfig eth0 down
sudo macchanger -r eth0
sudo ifconfig eth0 up
```

```bash
sudo apt-get install -y dmidecode
```

```bash
dmidecode -t system
dmidecode -t bios
```

```bash
sudo lshw -class disk
```