
const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar', opciones)
                .command('crear', 'Crea una tabla con la base especificada, hasta el limite especificado', opciones) 
                .help()
                .argv

module.exports = {
    argv
}