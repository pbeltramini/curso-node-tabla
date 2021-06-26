const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ('./config/yargs');
const colors = require('colors');

//limpio consola
console.clear();

//const [ , , arg3 = 'base=5'] = process.argv;
//const [ , base = 5] = arg3.split('=');

//Elijo la base de multiplicación
//const base = 3;

crearArchivo( argv.b, argv.l, argv.h )
   .then(nombreArchivo => console.log(nombreArchivo.blue.bold, 'creado'))
   .catch (err => console.log( err));
