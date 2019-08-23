import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers.js'
//para que sirve el schema? para saber cuales son los datos que podemos pedir, y saber (aproximadamente) como son los datos que vamos a obtener
//GraphQL Schema language. Es similar al lenguaje de consulta PERO NO ES EL MISMO. Permite abstreaernos del lenguaje del backend
//The most basic components of a GraphQL Schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has.

const typeDefs = ` 
    type Query {
      pinos: [Pino]
      lenguajeDePino(nombre: String): [String]
      proyecto(nombre: String): Proyecto
      conGolosinaFavorita(golosina: GolosinaFavorita): [Pino]
    }
    
    type Pino {
        nombre: String!
        jardinero: String!
        lenguajes: [ String ]
        golosina: GolosinaFavorita
    }
    
    type Proyecto {
        nombre: String!
        pinos: [Pino!]! 
        enIngles: Boolean
    }
    
    enum GolosinaFavorita {
        SKITTLES,
        OREOS,
        SUGUS
    }
`;

//PINO ES UN GRAPHQL OBJECT TYPE
//En cualquier servidor GraphQL DEBE existir el type Query. Mutation es opcional

//PARA PODER LEVANTAR LA APP DEBE HABER POR LO MENOS UNA QUERY
//PERO PARA QUE LAS QUERYS DEVUELVAN DATOS, TIENE QUE HABER UN RESOLVER QUE SE HAGA CARGO DE ELLAS

//TODO: Mostrar que pasa si no le paso un parametro necesario
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})