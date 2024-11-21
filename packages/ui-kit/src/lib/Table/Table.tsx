import React, { FC, useMemo } from 'react'

import { TablePropertiesInterface } from './Table.types'

import classes from './Table.module.css'

export const Table: FC<TablePropertiesInterface> = ({ columns = {}, data = [], error = false }) => {
  const columnKeys = useMemo(() => Object.keys(columns), [columns])

  return (
    <div className={classes.root}>
      <div className={classes.thead}>
        <div className={classes.tr}>
          {columnKeys.map((key) => (
            <div key={key} className={classes.th}>
              {columns[key]}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.tbody}>
        {error ?? undefined}
        {!error && (!data || data.length === 0) && <div className={classes.empty}>No data</div>}
        {data.map((item) => (
          <div key={item.key} className={classes.tr}>
            {columnKeys.map((key) => (
              <div key={key} className={classes.td} data-label={columns[key]}>
                {item[key] || '---'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
