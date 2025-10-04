import { ThemeProvider } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import React from 'react'
import '@mantine/core/styles.css'

import { GithubPage } from '../pages/github'

import classes from './App.module.css'

export const App = () => (
  <ThemeProvider>
    <div className={classes.wrapper}>
      <GithubPage />
    </div>
  </ThemeProvider>
)
