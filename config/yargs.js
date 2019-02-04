const opt = {
  descripcion: {
    demand: true,
    alias: 'd'
  },
  completado: {
    alias: 'c',
    default: true
  },
  listar:{
    alias: 'l',
    default:true
  }
}
const argv = require('yargs')
        .command('crear', 'Crear un elemento por hacer', opt)
        .command('actualizar', 'Actualiza el estado completado de una tarea',opt)
        //.command('listar','Lista las tareas por hacer', opt)
        .command('borrar', 'Borra un ua tarea ya realizada', opt)
        .help()
        .argv;

module.exports={
  argv
}
