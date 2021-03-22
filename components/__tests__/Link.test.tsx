import { render } from '@testing-library/react';
import Link, { withLink } from 'components/Link';

describe('Link', () => {
  test('Should render a Link element', () => {
    const { getByText } = render(<Link href="/">link</Link>);

    expect(getByText('link')).toBeInTheDocument();
    expect(getByText('link')).toHaveAttribute('href', '/');
  });

  test('Should render a Link element', () => {
    const TitleWithLink = withLink(() => <h1>title</h1>);

    const { getByText, container } = render(<TitleWithLink href="/" />);

    expect(getByText('title')).toBeInTheDocument();
    expect(container.querySelector('a')).toHaveAttribute('href', '/');
  });
});
