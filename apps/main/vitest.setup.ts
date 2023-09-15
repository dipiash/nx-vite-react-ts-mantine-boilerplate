import { vitest } from 'vitest'

import '@testing-library/jest-dom'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true

window.ResizeObserver =
  global.ResizeObserver =
  globalThis.ResizeObserver =
    window.ResizeObserver ||
    vitest.fn().mockImplementation(() => ({
      disconnect: vitest.fn(),
      observe: vitest.fn(),
      unobserve: vitest.fn(),
    }))

window.matchMedia =
  global.matchMedia =
  globalThis.matchMedia =
    window.matchMedia ||
    vitest.fn().mockImplementation(() => ({
      addListener: vitest.fn(),
      matches: false,
      removeListener: vitest.fn(),
    }))

window.matchMedia =
  global.matchMedia =
  globalThis.matchMedia =
    window.matchMedia ||
    vitest.fn().mockImplementation(() => ({
      addListener: vitest.fn(),
      matches: false,
      removeListener: vitest.fn(),
    }))
