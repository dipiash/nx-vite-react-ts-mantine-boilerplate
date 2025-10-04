import React, { useMemo } from 'react'

import { Box } from '@mantine/core'

import { type TablePropertiesInterface } from './Table.types'

import classes from './Table.module.css'

export const Table = ({ columns = {}, data = [], error = false }: TablePropertiesInterface) => {
  const columnKeys = useMemo(() => Object.keys(columns), [columns])

  return (
    <Box className={classes.root} role="table">
      <Box className={classes.thead} role="rowgroup">
        <Box className={classes.tr} role="row">
          {columnKeys.map((key) => (
            <Box key={key} className={classes.th} role="columnheader">
              {columns[key]}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.tbody} role="rowgroup">
        {error ?? undefined}
        {!error && (!data || data.length === 0) && (
          <Box aria-live="polite" className={classes.empty} role="row">
            <Box role="cell">No data</Box>
          </Box>
        )}
        {data.map((item) => (
          <Box key={item.key} className={classes.tr} role="row">
            {columnKeys.map((key) => (
              <Box key={key} data-label={columns[key]} className={classes.td} role="cell">
                {item[key] || '---'}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
