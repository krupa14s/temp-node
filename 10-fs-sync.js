const {readFileSync , writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf-8');
const secound = readFileSync('./content/secound.txt','utf-8');
// console.log(first,secound)

writeFileSync(
    './content/result-sync.txt',
    `Here is result: ${first}, ${secound} `,
    { flag: 'a'}
)

console.log('done with this task');
console.log('starting with another one');