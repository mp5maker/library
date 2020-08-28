## YARN ##

1. yarn watch
2. yarn dev
3. yarn start
4. yarn start2
5. yarn dev2

## DATABASE CREATION ##

1. createdb lireddit

## QUERY BUILDER ##

```javascript
    const queryBuilder = getConnection()
        .getRepository(Post)
        .createQueryBuilder("p")
        .orderBy('"createdAt"', "DESC")
        .take(realLimitPlusOne)

    if (cursor) {
        queryBuilder
            .where('"createdAt" < :cursor', {
            cursor: new Date(parseInt(cursor))
        })
    }

    const posts = await queryBuilder.getMany()
```

## MIGRATION ##

1. npx typeorm migration:create -n FakePosts

## EXPRESS ##

```javascript
    app.get('/', (_, response) => {
        response.send('Hello')
    })
```

## UBUNTU ##

```shell
    fuser -n tcp -k 4000
```

## GRAPHQL SETTINGS ##

```json
    {
        "editor.cursorShape": "line",
        "editor.fontFamily": "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
        "editor.fontSize": 14,
        "editor.reuseHeaders": true,
        "editor.theme": "dark",
        "general.betaUpdates": false,
        "prettier.printWidth": 80,
        "prettier.tabWidth": 2,
        "prettier.useTabs": false,
        "request.credentials": "include",
        "schema.disableComments": true,
        "schema.polling.enable": true,
        "schema.polling.endpointFilter": "*localhost*",
        "schema.polling.interval": 2000,
        "tracing.hideTracingResponse": true,
        "queryPlan.hideQueryPlanResponse": true
    }
```