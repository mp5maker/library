## YARN ##

1. yarn watch
2. yarn dev
3. yarn start
4. yarn start2
5. yarn dev2

## DATABASE CREATION ##

1. createdb lireddit

## SIMPLE QUERY ##

```javascript
    await Updoot.insert({
        userId,
        postId,
        value: realValue
    })

    const post = await Post.findOne(id)
    if (!post) return false
    if (post?.creatorId !== req.session.userId) throw new Error('NOT_AUTHORIZED')
    await Updoot.delete({ postId: id })
    await Post.delete({ id, creatorId: req.session.userId })
```

## RAW QUERY ##

```javascript
    await getConnection().query(`
        START TRANSACTION;

        insert into updoot("userId", "postId", value)
        values (${userId}, ${postId}, ${realValue});

        update post
        set points = points + ${realValue}
        where id = ${postId};

        COMMIT;
    `)

     const posts = await getConnection()
        .query(`
            select p.*,
            json_build_object(
                'id', u.id,
                'username', u.username,
                'email', u.email,
                'createdAt', u."createdAt",
                'updatedAt', u."updatedAt"
            ) creator
            ${ userId ? `,(select value from updoot where "userId" = $2 and "postId" = p.id) "voteStatus"` : `,null as "voteStatus"`}
            from post p
            inner join public.user u on u.id = p."creatorId"
            ${cursor && !userId ? `where p."createdAt" < $2` : ""}
            ${cursor && userId ? `where p."createdAt" < $3` : ""}
            order by p."createdAt" DESC
            limit $1
        `, replacements)
```

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