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
    vitest.fn().mockImplementation((query) => ({
      addEventListener: vitest.fn(),
      addListener: vitest.fn(),
      dispatchEvent: vitest.fn(),
      matches: false,
      media: query,
      onchange: null,
      removeEventListener: vitest.fn(),
      removeListener: vitest.fn(),
    }))

window.matchMedia =
  global.matchMedia =
  globalThis.matchMedia =
    window.matchMedia ||
    vitest.fn().mockImplementation((query) => ({
      addEventListener: vitest.fn(),
      addListener: vitest.fn(),
      dispatchEvent: vitest.fn(),
      matches: false,
      media: query,
      onchange: null,
      removeEventListener: vitest.fn(),
      removeListener: vitest.fn(),
    }))

const { getComputedStyle } = window

window.getComputedStyle = (elt) => getComputedStyle(elt)
