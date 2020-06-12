import { Application, Context } from 'https://deno.land/x/abc@v1.0.0-rc10/mod.ts'

const app = new Application();

/* Static */
app.static('/', './static')

/* Routes */
app.get('/', async(ctx: Context) => {
    console.log(`request mode`)
    await ctx.file('./index.html');
})


/* Listen to port */
app.start({
    port: 3000
})