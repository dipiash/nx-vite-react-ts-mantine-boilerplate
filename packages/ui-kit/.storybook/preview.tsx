import React from 'react'

import { Preview } from '@storybook/react'

import { ThemeProvider } from '../src/providers'

import '@mantine/core/styles.css'

const preview: Preview = {
  decorators: [(renderStory) => <ThemeProvider>{renderStory()}</ThemeProvider>],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
