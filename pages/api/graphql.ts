import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';

import schema from 'apollo/schema';

const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();

const apolloServerStart = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await apolloServerStart;
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});
