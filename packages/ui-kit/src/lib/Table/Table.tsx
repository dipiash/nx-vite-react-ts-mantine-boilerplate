import React, { FC, useMemo } from 'react'

import { TablePropertiesInterface } from './Table.types'

import classes from './Table.module.css'

export const Table: FC<TablePropertiesInterface> = ({ columns, data, error }) => {
  const columnKeys = useMemo(() => Object.keys(columns), [columns])

  return (
    <div className={classes.root}>
      <div className={classes.thead}>
        <div className={classes.tr}>
          {columnKeys.map((key) => (
            <div className={classes.th} key={key}>
              {columns[key]}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.tbody}>
        {error ?? undefined}
        {!error && (!data || data.length === 0) && <div className={classes.empty}>No data</div>}
        {data.map((item) => (
          <div className={classes.tr} key={item.key}>
            {columnKeys.map((key) => (
              <div className={classes.td} key={key} data-label={columns[key]}>
                {item[key] || '---'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

Table.defaultProps = {
  columns: {},
  data: [],
  error: false,
}
