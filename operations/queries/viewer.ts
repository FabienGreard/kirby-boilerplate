import { gql } from 'graphql-request';

export default gql`
  query Viewer {
    viewer {
      id
      name
    }
  }
`;
