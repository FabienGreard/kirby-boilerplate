import { render } from '@testing-library/react';

import ReactSVG from 'components/Icons/React';

describe('ReactSVG', () => {
  it('Should match snapshots', () => {
    const { container } = render(<ReactSVG />);

    expect(container).toMatchSnapshot();
  });
});
