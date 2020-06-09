/* Reading File */
const decoder = new TextDecoder('utf-8')
const data = await Deno.readFile('readme.txt')
console.log(decoder.decode(data))

/* Writing File */
const encoder = new TextEncoder();
const text = encoder.encode('hello again, ninjas')
await Deno.writeFile('readme.txt', text)

/* Renaming File */
await Deno.rename('readme.txt', 'deleteme.txt')

/* Delete File */
await Deno.remove('deleteme.txt')