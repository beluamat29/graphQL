import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers.js'
//para que sirve el schema? para saber cuales son los datos que podemos pedir, y saber (aproximadamente) como son los datos que vamos a obtener
//GraphQL Schema language. Es similar al lenguaje de consulta PERO NO ES EL MISMO. Permite abstreaernos del lenguaje del backend
//The most basic components of a GraphQL Schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has.

const typeDefs = ` 
    type Query {
      pinos: [Pino]
      pino(nombre: String): Pino
      jardineroDe(nombre: String): Pino
      lenguajesDePino(nombre: String): [String]
      proyectoDePino(nombre: String): Proyecto
      conGolosinaFavorita(golosina: GolosinaFavorita): [Pino]
      trabajaCon(nombre: String): [Pino]
      proyectosEnIngles: [Proyecto]
    }
    
    type Mutation {
        agregarPino(input: PinoInput): Pino
        eliminarPino(nombre: String): [Pino]
    }
    
    type Pino {
        nombre: String!
        jardinero: Pino
        lenguajes: [ String ]
        golosina: GolosinaFavorita
    }
    
    type Proyecto {
        nombre: String!
        pinos: [Pino]
        enIngles: Boolean
    }
    
     enum GolosinaFavorita {
        SKITTLES,
        OREOS,
        SUGUS
    }
    
    input PinoInput {
        nombre: String!,
        jardinero: String,
        lenguajes: [String]!,
        golosina: GolosinaFavorita!
    }

`;


//POSIBLES CONSULTAS:
// LISTA DE GOLOSINAS DE TODOS LOS PINOS DE UN PROYECTO
//GOLOSINA MAS POPULAR EN UN PROYECTO
//GOLOSINA DEL JARDINERO DE ALGUIEN
//COMPAÑEROS DE PROYECTO DE ALGUIEN

//PINO ES UN GRAPHQL OBJECT TYPE
//En cualquier servidor GraphQL DEBE existir el type Query. Mutation es opcional

//PARA PODER LEVANTAR LA APP DEBE HABER POR LO MENOS UNA QUERY
//PERO PARA QUE LAS QUERYS DEVUELVAN DATOS, TIENE QUE HABER UN RESOLVER QUE SE HAGA CARGO DE ELLAS

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})