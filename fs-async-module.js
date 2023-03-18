const { readFile, writeFile } = require('fs');
console.log('start');

readFile('./first.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  const first = res;
  readFile('./second.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(res);
    const second = res;
    writeFile('./third.txt', ` result is ${first} , ${second}`, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res);
      console.log('done');
    });
  });
});
console.log('next');
