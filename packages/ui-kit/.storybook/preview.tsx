import React from 'react'

import { Preview } from '@storybook/react'

import { ThemeProvider } from '../src/providers'

import '@mantine/core/styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [(renderStory) => <ThemeProvider>{renderStory()}</ThemeProvider>]

export default preview
