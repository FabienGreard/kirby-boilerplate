/* eslint-disable no-console */
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';

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

    serviceWorkerUrl = undefined;
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

    renderHook(() => useServiceWorker({ isForce: true }));

    fireEvent(window, new Event('load'));

    expect(await serviceWorkerUrl).toBe('/sw.js');
    expect(await console.log).toBeCalledWith('Service Worker registration successful with scope: ', 'test');
  });

  test('Should catch an error', async () => {
    navigatorSpy.mockImplementation(() => ({
      serviceWorker: {
        register: jest.fn(() => Promise.reject()),
      },
    }));

    renderHook(() => useServiceWorker({ isForce: true }));

    fireEvent(window, new Event('load'));

    expect(await console.log).toBeCalledWith('Service Worker registration failed: ', undefined);
  });

  test('Should not register (dev)', async () => {
    navigatorSpy.mockImplementation(() => ({
      serviceWorker: {
        register: jest.fn((url: string) => {
          serviceWorkerUrl = url;
          return Promise.resolve({ scope: 'test' });
        }),
      },
    }));

    renderHook(() => useServiceWorker());

    fireEvent(window, new Event('load'));

    expect(await serviceWorkerUrl).toBe(undefined);
    expect(await console.log).not.toBeCalled();
  });

  test('Should not register (disable)', async () => {
    navigatorSpy.mockImplementation(() => ({
      serviceWorker: {
        register: jest.fn((url: string) => {
          serviceWorkerUrl = url;
          return Promise.resolve({ scope: 'test' });
        }),
      },
    }));

    renderHook(() => useServiceWorker({ isDisable: true, isForce: true }));

    fireEvent(window, new Event('load'));

    expect(serviceWorkerUrl).toBe(undefined);
    expect(await console.log).not.toBeCalled();
  });

  test('Should not register (no serviceWorker)', async () => {
    navigatorSpy.mockImplementation(() => ({}));

    renderHook(() => useServiceWorker({ isForce: true }));

    expect(await console.log).not.toBeCalled();
  });
});
