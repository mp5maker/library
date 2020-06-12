import { Application, Context } from 'https://deno.land/x/abc@v1.0.0-rc10/mod.ts'

import {
    booksList,
    bookDetails,
    bookCreate,
    bookDelete,
} from './controllers/books/index.ts'

const app = new Application();
/* Static Files */
app.static('/', './assets')

/* Routes */
app.get('/', async(ctx: Context) => {
    await ctx.file('./assets/index.html')
})

/* Api */
app
    .get('/books', booksList)
    .get('/books/:id', bookDetails)
    .post('/books', bookCreate)
    .delete('/books/:id', bookDelete)

/* Start */
app.start({ port: 3000 })