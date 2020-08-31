console.log("process", process.title)

console.log('first')
process.nextTick(function() {
    console.log('second')
})
console.log('third')