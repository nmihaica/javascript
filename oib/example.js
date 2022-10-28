var check = require('./checker')

let oibs = [
  '27232371867',
  'HR27232371867',
  '27232371868',
  27232371867,
]

for (const oib of oibs) {
  console.log(check(oib));
}