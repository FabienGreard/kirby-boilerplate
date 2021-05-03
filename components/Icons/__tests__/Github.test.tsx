import { render } from '@testing-library/react';

import GithubSVG from 'components/Icons/Github';

describe('ReactSVG', () => {
  it('Should match snapshots', () => {
    const { container } = render(<GithubSVG />);

    expect(container).toMatchSnapshot();
  });
});
