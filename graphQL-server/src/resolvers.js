import {pinos, proyectos} from './pinos'

var baseDePinos = pinos;

const proyectoTieneAlPino = (proyecto, pino) => {
    return proyecto.pinos.some(pinoDeProyecto => pinoDeProyecto.nombre === pino.nombre)
}

export var resolvers = {
    //cada uno de estos es un resolver
    Query: {
        pinos() {
            return baseDePinos
        },

        pino(obj, args) {
            return baseDePinos.find(pino => pino.nombre === args.nombre);
        },

        proyectoDePino(obj,args) {
            let pino = baseDePinos.find(pino => pino.nombre === args.nombre);
            return proyectos.find(proyecto => proyectoTieneAlPino(proyecto, pino))
        },

        jardineroDe(obj, args) {
          return baseDePinos.find(pino => pino.nombre === args.nombre).jardinero;
        },

        lenguajesDePino(obj, args) {
            return baseDePinos.find(pino => pino.nombre === args.nombre).lenguajes
        },

        conGolosinaFavorita(obj, args){
            return baseDePinos.filter(pino => pino.golosina === args.golosina)
        }
    },
    Mutation: {
        agregarPino(obj, {input}) {
            console.log(input)
            let pino = {
                nombre: input.nombre,
                jardinero: input.jardinero,
                lenguajes: input.lenguajes,
                golosina: input.golosina
            }
            baseDePinos.push(pino);
            return pino
        },
        eliminarPino(obj, args){
            baseDePinos = pinos.filter(pino => pino.nombre !== args.nombre);
            return baseDePinos
        }
    }
};