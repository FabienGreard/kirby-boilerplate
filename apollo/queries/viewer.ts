import { gql } from '@apollo/client';

export default gql`
  query ViewerQuery {
    viewer {
      id
      name
    }
  }
`;
