import { vi } from 'vitest'
import '@testing-library/jest-dom'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true

class ResizeObserverMock implements ResizeObserver {
  disconnect = vi.fn()
  observe = vi.fn()
  unobserve = vi.fn()
  constructor() {}
}

globalThis.ResizeObserver = globalThis.ResizeObserver || ResizeObserverMock

globalThis.matchMedia =
  globalThis.matchMedia ||
  ((query: string) => ({
    dispatchEvent: vi.fn(),
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(),
  }))

const { getComputedStyle } = globalThis

globalThis.getComputedStyle = (elt) => getComputedStyle(elt)
