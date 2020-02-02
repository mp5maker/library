const data = [
    {
        "transaction_for": 1,
        "method": 1,
        "amount": 184,
        "accounts": 8,
        "errors": {}
    },
    {
        "transaction_for": 1,
        "method": 3,
        "amount": 120,
        "accounts": 11,
        "cash_payable": 120,
        "errors": {}
    }
]

const sortedData = data.sort((a, b) => b.method - a.method)
console.log(sortedData)