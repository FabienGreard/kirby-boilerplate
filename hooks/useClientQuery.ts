import { DocumentNode, useQuery, QueryResult } from '@apollo/client';

import useHasMounted from 'hooks/useHasMounted';

export default function useClientQuery<T extends unknown>(query: DocumentNode): Partial<QueryResult<T>> {
  const hasMounted = useHasMounted();
  const resultQuery = useQuery(query);

  if (!hasMounted) return {};

  return resultQuery;
}
