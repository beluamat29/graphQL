import {pinos, proyectos} from './pinos'

var baseDePinos = pinos;
var baseDeProyectos = proyectos;

const proyectoTieneAlPino = (proyecto, pino) => {
    return proyecto.pinos.some(pinoDeProyecto => pinoDeProyecto.nombre === pino.nombre)
}

const obtenerPinoPorNombre = (nombre) => {
    return baseDePinos.find(pino => pino.nombre === nombre);
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

        proyectos(){
            return baseDeProyectos
        },

        proyecto(obj, args) {
            return baseDeProyectos.find(proyecto => proyecto.nombre === args.nombre);
        },
        proyectoDePino(obj,args) {
            let pino = baseDePinos.find(pino => pino.nombre === args.nombre);
            return proyectos.find(proyecto => proyectoTieneAlPino(proyecto, pino))
        },

        jardineroDe(obj, args) {
          return obtenerPinoPorNombre(args.nombre).jardinero;
        },

        lenguajesDePino(obj, args) {
            return obtenerPinoPorNombre(args.nombre).lenguajes
        },

        conGolosinaFavorita(obj, args){
            return baseDePinos.filter(pino => pino.golosina === args.golosina)
        },

        trabajaCon(obj, args){
            let pino = obtenerPinoPorNombre(args.nombre);
            let pinosDeproyectoDePino = proyectos.find(proyecto => proyectoTieneAlPino(proyecto, pino)).pinos.filter(p => p.nombre !== pino.nombre);

            return pinosDeproyectoDePino;
        },

        proyectosEnIngles(){
            return baseDeProyectos.filter(proyecto => proyecto.enIngles);
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
            return baseDePinoss
        },
        agregarPinoAProyecto(obj, args) {
            let pinoAAgregar = obtenerPinoPorNombre(args.pino);
            baseDeProyectos.find(proyecto => proyecto.nombre === args.proyecto).pinos.push(pinoAAgregar);
            return baseDeProyectos.find(proyecto => proyecto.nombre === args.proyecto)
        }
    }
};