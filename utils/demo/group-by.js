var groupBy = require('../group-by')

var b = [
  { code: 100, basis: 2.00, amount: 0.20 },
  { code: 101, basis: 3.00, amount: 0.50 },
  { code: 102, basis: 4.00, amount: 0.30 }
]
let result = groupBy(b, 'code')
console.log('result', result)