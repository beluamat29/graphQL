import {pinos} from './examples'

export const resolvers = {
    //cada uno de estos es un resolver
    Query: {
        pinos() {
            return pinos
        },
        lenguajeDePino(obj, args){
            return pinos.find(pino => pino.nombre === args.nombre).lenguajes
        }
    }
};