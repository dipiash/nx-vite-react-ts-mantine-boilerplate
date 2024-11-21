import { ThemeProvider } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import React, { FC } from 'react'

import { GithubApp } from './GithubApp'

import '@mantine/core/styles.css'
import classes from './App.module.css'

const App: FC = () => (
  <ThemeProvider>
    <div className={classes.wrapper}>
      <GithubApp />
    </div>
  </ThemeProvider>
)

export default App
