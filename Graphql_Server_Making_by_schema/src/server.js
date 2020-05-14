require("dotenv").config(); //
import{ GraphQLServer } from "graphql-yoga";//graphql-yoga에서 graphqlserver를 가져옴
import schema from "./schema";
import logger from "morgan";
const PORT = process.env.PORT || 4000;  //포트 변수에 포트넘버 설정

const server = new GraphQLServer({schema});
server.express.use(logger("dev"));

server.start({port:PORT},()=>
    console.log('Server running on http://localhost:${PORT}')
);