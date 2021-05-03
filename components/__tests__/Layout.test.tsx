import { render } from 'utils/customTestRender';
import Layout from 'components/Layout';

describe('Layout', () => {
  test('Should render a Layout element', () => {
    const { getByText, getByTestId } = render(
      <Layout>
        <h1 data-testid="title">Title</h1>
      </Layout>,
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByTestId('title')).toBeInTheDocument();
  });
});
