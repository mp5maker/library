/* Looping Keys */
const list  = {
    food: 'macaroni',
    groceries: 'orange'
}
Object.prototype.cleaning = 'brasso cleaner'

for (let item in list) if (list.hasOwnProperty(item)) console.log(item)
console.log(Object.keys(list))


/* Array */
