const { ApolloServer, gql, PubSub} = require("apollo-server");
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs.js');
const mongoose = require('mongoose');
mongoose.set("useUnifiedTopology", true);

const pubSub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubSub })
});

mongoose
.connect('mongodb+srv://default-user1:deff11@cluster0.xgiva.mongodb.net/test_training?retryWrites=true&w=majority', 
{useNewUrlParser: true})
.then(() => {
    console.log('mongoDB is connected');
    return server.listen();
})
.then(res => {
    console.log('Server is running at ${res.url}');
})
.catch(err => {
    console.log(err);
});

// 123
// 123
// 123
// 123