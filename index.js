import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');

fs.readFile('./instructions.txt', (err, data) => {
    if(err) {
        console.log('can\'t read file');
    }

    const instructions = data.toString();
    let i = 0;
    let result = 0;
    while (i < instructions.length) {
        if(instructions[i]==='('){
            result++;
        }
        if(instructions[i]===')'){
            result--;
        }
        i++;
    }
    console.log('instructions: ', instructions);
    console.log('number of floors: ', result);
});