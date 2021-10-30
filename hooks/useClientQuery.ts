import { DocumentNode, useQuery, QueryResult, QueryHookOptions } from '@apollo/client';

import useHasMounted from 'hooks/useHasMounted';

export default function useClientQuery<T>(query: DocumentNode, options?: QueryHookOptions<T>): Partial<QueryResult<T>> {
  const hasMounted = useHasMounted();
  const resultQuery = useQuery(query, options);

  if (!hasMounted) return {};

  return resultQuery;
}
