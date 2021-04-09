import { renderHook } from '@testing-library/react-hooks';

import useHasMounted from 'hooks/useHasMounted';

describe('useHadMounted', () => {
  test('Should mount', async () => {
    const { result } = renderHook(() => useHasMounted());

    expect(result.all).toEqual([false, true]);
  });
});
