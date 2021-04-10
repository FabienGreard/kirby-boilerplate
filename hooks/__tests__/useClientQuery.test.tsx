import { render } from 'utils/customTestRender';

import useClientQuery from 'hooks/useClientQuery';
import { ViewerQuery } from 'apollo/operations/viewer';
import { ViewerQuery as ViewerQueryType } from 'types/ViewerQuery';

const Viewer = () => {
  const { data } = useClientQuery<ViewerQueryType>(ViewerQuery);

  return <h1>{data?.viewer?.name}</h1>;
};

describe('useClientQuery', () => {
  test('Should return a response data from query after mounted', async () => {
    const viewerMock = {
      request: {
        query: ViewerQuery,
      },
      result: {
        data: {
          viewer: { id: '1', name: 'John' },
        },
      },
    };

    const result = render(<Viewer />, { mocks: [viewerMock] });

    expect(await result.findByText(/^John/i)).toBeVisible();
  });
});
