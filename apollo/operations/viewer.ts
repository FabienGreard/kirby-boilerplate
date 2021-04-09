import { gql } from '@apollo/client';

export const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
    }
  }
`;

export default null;
