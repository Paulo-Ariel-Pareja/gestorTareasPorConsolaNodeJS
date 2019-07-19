const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea para hacer'
};

const completado= {
    default: true,
    alias: 'c',
    desc: 'Marcado como completado o pendiente'
}
const argv =require('yargs').command('crear', 'Crea una tarea para realizar', {
                                descripcion
                            })
                            .command('actualizar', 'Actualiza la tarea especificada', {
                                descripcion,
                                completado
                            })
                            .command('borrar', 'Elimina la tarea especificada', {
                                descripcion
                            })
                            .help()
                            .argv


module.exports = {
    argv
}