import tasks from './examples'

export const resolvers = {
    //cada uno de estos es un resolver
    Query: {
        hello() {
            return 'HELLO WORLD'
        },
        greet(root, args){
            console.log(args)
            return `Hello ${args.name}!`
        },
        tasks() {
            return tasks
        }
    }
};