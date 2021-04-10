/* eslint-disable no-console */
import { fireEvent, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useServiceWorker from 'hooks/useServiceWorker';

jest.mock('utils/constant', () => {
  return {
    __esModule: true,
    default: null,
    IS_RUNNING_DEV: true,
  };
});

describe('useServiceWorker', () => {
  let navigatorSpy;
  let consoleSpy;
  let serviceWorkerUrl: string;

  beforeEach(() => {
    navigatorSpy = jest.spyOn(window, 'navigator', 'get');
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    navigatorSpy.mockRestore();
    consoleSpy.mockRestore();
  });

  test('Should register a ServiceWorker', async () => {
    navigatorSpy.mockImplementation(() => ({
      serviceWorker: {
        register: jest.fn((url: string) => {
          serviceWorkerUrl = url;
          return Promise.resolve({ scope: 'test' });
        }),
      },
    }));

    renderHook(() => useServiceWorker(true));

    fireEvent(window, new Event('load'));

    await waitFor(() => {
      expect(console.log).toBeCalledWith('Service Worker registration successful with scope: ', 'test');
      expect(serviceWorkerUrl).toBe('/sw.js');
    });
  });

  test('Should catch an error', async () => {
    navigatorSpy.mockImplementation(() => ({
      serviceWorker: {
        register: jest.fn(() => Promise.reject()),
      },
    }));

    renderHook(() => useServiceWorker(true));

    fireEvent(window, new Event('load'));

    await waitFor(() => expect(console.log).toBeCalledWith('Service Worker registration failed: ', undefined));
  });

  test('Should not register (dev)', async () => {
    navigatorSpy.mockImplementation(() => ({
      serviceWorker: {
        register: jest.fn(() => Promise.resolve({ scope: 'test' })),
      },
    }));

    renderHook(() => useServiceWorker());

    fireEvent(window, new Event('load'));

    await waitFor(() => expect(console.log).not.toBeCalled());
  });

  test('Should not register (no serviceWorker)', async () => {
    navigatorSpy.mockImplementation(() => ({}));

    renderHook(() => useServiceWorker(true));

    await waitFor(() => expect(console.log).not.toBeCalled());
  });
});
