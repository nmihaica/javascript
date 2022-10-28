var copy = require('../copy')

let cp1 = {
  total: 10,
  discount: {
    value: 1,
    percentage: 10
  },
  products: [
    { description: 'Product 1', qty: 1, capita: 10, cumulative: 10 },
    { description: 'Product 2', qty: 1, capita: 0, cumulative: 0 }
  ]
}

let cp2 = copy(cp1)
console.log(cp1)
console.log(cp2)