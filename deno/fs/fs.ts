import { readJson, writeJson } from 'http://deno.land/std/fs/mod.ts';

/* Read */
const employees = await readJson('employee.json')
console.log(employees)


/* Write */
const books = [
    {
        title: 'the way of kings',
        author: 'brandon sanderson'
    },
    {
        title: 'name of the wind',
        author: `patrick rothfuss`
    }
]
await writeJson('books.json', books, { spaces: 4 })

