import { Preview } from '@storybook/react-vite'
import React from 'react'
import '@mantine/core/styles.css'

import { ThemeProvider } from '../src/providers'

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
