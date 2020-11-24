const hasExecutedFails = require('./lib/hasExecutedFails');

console.log(hasExecutedFails([
    'propertyType',
    'homeCondition'
  ], [
    'yearBuilt',
    'propertyType',
    'homeCondition'
  ]
));