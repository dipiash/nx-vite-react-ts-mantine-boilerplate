import { vitest } from 'vitest'
import '@testing-library/jest-dom'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true

globalThis.ResizeObserver =
  globalThis.ResizeObserver =
  globalThis.ResizeObserver =
    globalThis.ResizeObserver ||
    vitest.fn().mockImplementation(() => ({
      disconnect: vitest.fn(),
      observe: vitest.fn(),
      unobserve: vitest.fn(),
    }))

globalThis.matchMedia =
  globalThis.matchMedia =
  globalThis.matchMedia =
    globalThis.matchMedia ||
    vitest.fn().mockImplementation((query) => ({
      dispatchEvent: vitest.fn(),
      matches: false,
      media: query,
      addEventListener: vitest.fn(),
      addListener: vitest.fn(),
      onchange: null,
      removeEventListener: vitest.fn(),
      removeListener: vitest.fn(),
    }))

globalThis.matchMedia =
  globalThis.matchMedia =
  globalThis.matchMedia =
    globalThis.matchMedia ||
    vitest.fn().mockImplementation((query) => ({
      dispatchEvent: vitest.fn(),
      matches: false,
      media: query,
      addEventListener: vitest.fn(),
      addListener: vitest.fn(),
      onchange: null,
      removeEventListener: vitest.fn(),
      removeListener: vitest.fn(),
    }))

const { getComputedStyle } = globalThis

globalThis.getComputedStyle = (elt) => getComputedStyle(elt)
