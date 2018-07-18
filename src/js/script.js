const pug = require('pug');


const compileFunction = pug.compileFile('template.pug');

console.log(compiledFunction({
    name: 'Puguito'
}));

