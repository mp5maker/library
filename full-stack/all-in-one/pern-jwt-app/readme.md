### Install Typeorm Globally

```bash
  npm install -g typeorm
  typeorm init --database postgres
  npm run typeorm migration:run
  npm run typeorm migration:revert
  npm run typeorm migration:generate -- -n [your-name]
  npm run typeorm migration:create -- -n [your-name]
```
