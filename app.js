const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let item = toDo.crear(argv.descripcion); 
        console.log('Tarea creada:', item);
        break;

    case 'listar':
        let lista = toDo.getLista();
        for (let tarea of lista) {
            console.log('========POR HACER========='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=========================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}




//node app crear -d "Pasear al perro"
//node app listar
//node app actualizar -d "Pasear al perro" -c true/false