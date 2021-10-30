import { DocumentNode, useQuery, QueryResult, QueryHookOptions } from '@apollo/client';

import useHasMounted from 'hooks/useHasMounted';
import { Query } from 'types/schema';

export default function useClientQuery<T = Query>(
  query: DocumentNode,
  options?: QueryHookOptions<T>,
): Partial<QueryResult<T>> {
  const hasMounted = useHasMounted();
  const resultQuery = useQuery(query, options);

  if (!hasMounted) return {};

  return resultQuery;
}
