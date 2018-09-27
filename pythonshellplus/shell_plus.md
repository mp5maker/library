### Python Shell Plus ###

### Some Shortcuts ###
* *Ctrl + L* = clear the terminal
* *quit()* = to exit

**Run the Interactive Console**
```bash
    python manage.py shell_plus
```
### Select All from Service Consumed [Comparison]####
```sql
    RAW
    query = "SELECT * FROM ServiceConsumed ORDER BY created_at DESC"
    --------------------------------------
    DJANGO
    query = ServiceConsumed.objects.all()
```

### Print Queries ###
```bash
    query = ServiceConsumed.objects.all()
    print query

    print(ServiceConsumed.objects.get(pk=1))
```

### Show the Raw Query ###
```bash
    query = ServiceConsumed.objects.get(pk=1)
    print query.query
```

### Search By Primary Key ID ##
```bash
    RAW
    query = "SELECT * FROM ServiceConsumed WHERE id = 1"
    ----------------------------------------------------
    DJANGO
    query = ServiceConsumed.objects.get(pk=1)
```

### Retrieving Specific Objects with filter ###
```bash
    DJANGO
    ServiceConsumed.objects.filter()
```