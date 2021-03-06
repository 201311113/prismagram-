require("dotenv").config(); //
import{ GraphQLServer } from "graphql-yoga";//graphql-yoga에서 graphqlserver를 가져옴

const PORT = process.env.PORT || 4000;

const typeDefs = 'type Query{  hello: String!}';


const resolvers = { 
    Query:{
        hello: ()=>"HI"
    }
    
};
const server = new GraphQLServer({typeDefs,resolvers});
server.start({port:PORT},()=>
    console.log('Server running on http://localhost:${PORT}')
);