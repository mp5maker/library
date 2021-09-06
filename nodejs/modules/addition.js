//  Exports is the keyword to make methods and properties available outside the module file
exports.addition = (...args) => {
    return args.reduce((totalSum, arg) => {
        totalSum += arg;
        return totalSum;
    }, 0)
}