const express = require("express");
const app = express();
const PORT = 4000;
const userData = require("./labeled-data.json");
const graphql = require("graphql")
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLList} = graphql
const { graphqlHTTP } = require("express-graphql")


const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: { type: GraphQLFloat},
        Symbol: { type: GraphQLString},
        Open: { type: GraphQLFloat},
        High: { type: GraphQLFloat},
        Low: { type: GraphQLFloat},
        Close: { type: GraphQLFloat},
        Vol: { type: GraphQLFloat}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { Symbol: { type: GraphQLString}},
            resolve(parent, args) {
                return userData.filter(item => item.Symbol == args.Symbol)
            }
        } 
    }
})

const schema = new GraphQLSchema({query: RootQuery})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log("server running")
});


