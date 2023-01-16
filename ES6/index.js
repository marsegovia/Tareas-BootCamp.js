import {Suma, Multiplica} from  "./controller.js"
import chalk from 'chalk';

const sum = Suma(1,2)
const sum_2 = Suma(4,5)
const mult = Multiplica(4,2)
console.log("La suma 1 es:",chalk.green(sum))
console.log("La suma 2 es:",chalk.green(sum_2))
console.log("La multiplicacion es",chalk.blue(mult))


