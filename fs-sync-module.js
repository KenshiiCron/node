const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./first.txt', 'utf-8');
const second = readFileSync('./second.txt', 'utf-8');
const third = readFileSync('./third.txt', 'utf-8');

console.log(third);
writeFileSync('./third.txt', 'appended', { flag: 'a' });
