import { Application, Context } from 'https://deno.land/x/abc@v1.0.0-rc10/mod.ts'
import _ from "https://deno.land/x/deno_lodash/mod.ts";
import { v4 } from 'https://deno.land/std/uuid/mod.ts';


import { BookInterface } from '../../models/book/interface.ts'
import { BookModel } from '../../models/book/index.ts'


export const booksList = async(ctx: Context) => {
    return ctx.json(BookModel, 200)
}

export const bookDetails = async(ctx: Context) => {
    const id = _.get(ctx, 'params.id', '')
    const book = BookModel.find((item) => item.id == id)
    if (id && book) return ctx.json(book, 200)
    return ctx.json([
        {
            id: `This is do not exist`
        }
    ], 404)
}

export const bookCreate = async(ctx: Context) => {
    const body = await ctx.body()
    const title = _.get(body, 'title', '')
    const author = _.get(body, 'author', '')
    const pages = _.get(body, 'pages', '')
    const id = v4.generate()

    const book = {
        id,
        title,
        author,
        pages
    }

    BookModel.push(book)
    return ctx.json(book, 200)
}

export const bookDelete = async(ctx: Context) => {
    const id = _.get(ctx, 'params.id', '')
    const book = BookModel.find((item) => item.id == id)
    if (book) {
        const deletedBook = BookModel.filter((book: BookInterface) => book.id !== id)
        return ctx.json(deletedBook, 200)
    }
    return ctx.string('no book with that id', 404)
}