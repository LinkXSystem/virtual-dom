const diff = require('../diff');
const h = require('../h');

const hello = h('div', 'HELLO');
const world = h('section', 'WORLD');

const patch = diff(hello, world);

console.log('====================================');
console.log(patch);
console.log('====================================');
