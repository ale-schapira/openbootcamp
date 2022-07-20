// - En el entrypoint index.js, importa el módulo controller.js
import {suma, multiplica} from './modulos/controller.js'

//Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
import chalk from 'chalk';

//- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5

let sum1= suma(1,2);
console.log(sum1)

let sum2= suma(4,5);
console.log(sum2);

let mult= multiplica(sum1, sum2);
console.log(mult);

//- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde

console.log(chalk.green('Hello world!'))