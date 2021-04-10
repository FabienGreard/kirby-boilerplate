import { makeExecutableSchema } from 'apollo-server-micro';
import typeDefs from './type-defs';
import resolvers from './resolvers';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
