// Add your functions here
const map = (array, cb) => array.map(item => cb(item))
const reduce = (array, cb, start = 0) => array.reduce(cb, start)
