import { DocumentNode, useQuery, QueryResult, QueryHookOptions } from '@apollo/client';

import useHasMounted from 'hooks/useHasMounted';

export default function useClientQuery<T extends unknown>(
  query: DocumentNode,
  options?: QueryHookOptions<T>,
): Partial<QueryResult<T>> {
  const hasMounted = useHasMounted();
  const resultQuery = useQuery(query, options);

  if (!hasMounted) return {};

  return resultQuery;
}
