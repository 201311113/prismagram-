import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes = fileLoader(path.join(__dirname,"/api/**/*.graphql"));//fileloader인자로 파일경로값이 필요
//이렇게 하면 api폴더 밑 모든 폴더 중 graphql로 끝나는 모든 파일을 가져옴
//** 는 모든 폴더 *.~ 은 ~로 끝나는 모든 파일
const allResolvers = fileLoader(path.join(__dirname,"/api/**/*.js"));
//allTypes에는 typeDefs역할하던 파일들, allResolvers에는 resolvers역할하던 파일들을 다 가져오는 것

const schema = makeExecutableSchema({
    typeDefs : mergeTypes(allTypes),
    resolvers : mergeResolvers(allResolvers)
});

export default schema;
