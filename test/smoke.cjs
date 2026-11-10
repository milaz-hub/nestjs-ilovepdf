
const assert = require('node:assert/strict');

const library = require('../dist/index.js');

assert.ok(
  Object.keys(library).length > 0,
  'The library must export at least one value'
);

console.log('Package smoke test passed');
