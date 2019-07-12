export const resolvers = {
    Query: {
        hello() {
            return 'HELLO WORLD'
        },
        greet(root, args){
            console.log(args)
            return 'Hello!'
        }
    }
};