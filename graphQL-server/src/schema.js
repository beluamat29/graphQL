import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers.js'
//para que sirve el schema? para saber cuales son los datos que podemos pedir, y saber (aproximadamente) como son los datos que vamos a obtener
//GraphQL Schema language. Es similar al lenguaje de consulta PERO NO ES EL MISMO. Permite abstreaernos del lenguaje del backend
//The most basic components of a GraphQL Schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has.

const typeDefs = ` 
    type Query {
      alumnos: [Alumno]
      alumno(nombre: String): Alumno
      lenguajesDeAlumno(nombre: String): [String]
      proyectoDeAlumno(nombre: String): Proyecto
      conGolosinaFavorita(golosina: GolosinaFavorita): [Alumno]
    }
    
    type Mutation {
        agregarAlumno(input: AlumnoInput): Alumno
        eliminarAlumno(nombre: String): [Alumno]
    }
    
    type Alumno {
        nombre: String!
        trabajoFinal: TrabajoFinal?
        lenguajes: [ String ]
        golosina: GolosinaFavorita?
    }
    
    type TrabajoFinal {
        nombre: String!
        lenguajes: [String]
        repositorio: SVCRepo
    }
    
     enum SVCRepo {
        GITHUB,
        GITLAB,
        BITBUCKET
     }
     
     enum GolosinaFavorita {
        SKITTLES,
        OREOS,
        SUGUS
    }
    
    input AlumnoInput {
        nombre: String!,
        trabajoFinal: TrabajoFinal?,
        lenguajes: [String]!,
        golosina: GolosinaFavorita?
    }
    ;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
    
