## YARN ##

1. yarn watch
2. yarn dev
3. yarn start
4. yarn start2
5. yarn dev2

## DATABASE CREATION ##

1. createdb lireddit

## MIGRATION ##

1. npx mikro-orm migrate:create

## QUERIES ##

```javascript
    import { Post } from "./entities/Post"

    /* Create Example */
    const post = orm.em.create(Post, { title: 'my first post' })
    await orm.em.persistAndFlush(post)

    /* Find Example */
    const posts = await orm.em.find(Post, {})
    console.log(posts)
```

## EXPRESS ##

```javascript
    app.get('/', (_, response) => {
        response.send('Hello')
    })
```