import { render } from '@testing-library/react';
import Head from 'components/Head';

import { SEO } from 'utils/constant';

describe('Header', () => {
  test('Should had default values', () => {
    render(<Head />);

    expect(document.title).toEqual(SEO.title);
    expect((document.head.querySelector('meta[name=description]') as HTMLMetaElement).content).toEqual(SEO.description);
  });

  test('Should set a custom document title', () => {
    render(<Head title="New document title" />);

    expect(document.title).toEqual('New document title');
  });

  test('Should set a custom meta description', () => {
    render(<Head description="New description meta" />);

    expect((document.head.querySelector('meta[name=description]') as HTMLMetaElement).content).toEqual(
      'New description meta',
    );
  });
});
