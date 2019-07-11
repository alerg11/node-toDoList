const descripcion = {
    alias: 'd',
    demand: true,                    
    desc: 'Descripcion del item por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente el item'
}

const argv = require('yargs')
            .command('crear', 'Crea un item', {
                descripcion
            })
            .command('actualizar', 'Actualiza el estado de un item', {
                descripcion,
                completado
            })
            .command('borrar', 'Borra un item', {
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}