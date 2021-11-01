import { gql } from 'apollo-server-micro';

export default gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    viewer: User
  }
`;
