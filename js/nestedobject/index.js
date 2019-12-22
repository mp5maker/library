let employee = {
    personal: {
        first_name: `Photon`,
        last_name: `Khan`,
    }
}

const setProperty = ({ obj, path, value }) => {
    const pathSplit = typeof path == 'string' ? path.split('.') : ``
    if (pathSplit) {
        const pathTotalIndex = pathSplit.length - 1
        const setObj = pathSplit.reduce((collection, property, index) => {
            let getValue;
            const isLastIndex = (index == pathTotalIndex)
            try {
                getValue = collection[property]
                if (!isLastIndex && !getValue) collection[property] = {}
                if (!isLastIndex && getValue) collection[property] = { ...getValue }
                if (isLastIndex) collection[property] = value
                return collection[property]
            } catch(error) {
                if (!isLastIndex) collection[property] = {}
                if (isLastIndex) collection[property] = value
                return collection[property]
            }
            return getValue
        }, obj)
        return setObj
    }
    return obj
}

setProperty({ obj: employee, path: `personal.age`, value: 30 })
setProperty({ obj: employee, path: `company.department.id`, value: 5 })
console.log(employee)