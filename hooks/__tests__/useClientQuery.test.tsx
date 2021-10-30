import { render } from 'utils/customTestRender';

import useClientQuery from 'hooks/useClientQuery';
import VIEWER_QUERY from 'apollo/queries/viewer';
import { Query } from 'types/schema';

const Viewer = () => {
  const { data } = useClientQuery<Query>(VIEWER_QUERY);

  return <h1>{data?.viewer?.name}</h1>;
};

describe('useClientQuery', () => {
  test('Should return a response data from query after mounted', async () => {
    const viewerMock = {
      request: {
        query: VIEWER_QUERY,
      },
      result: {
        data: {
          viewer: { id: '1', name: 'Kirby' },
        },
      },
    };

    const result = render(<Viewer />, { mocks: [viewerMock] });

    expect(await result.findByText(/^Kirby/i)).toBeVisible();
  });
});
