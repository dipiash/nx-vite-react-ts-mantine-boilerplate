import React, { FC, useMemo } from 'react'

import { TablePropertiesInterface } from './Table.types'

import { STable } from './Table.styled'

export const Table: FC<TablePropertiesInterface> = ({ columns, data, error }) => {
  const columnKeys = useMemo(() => Object.keys(columns), [columns])

  return (
    <STable>
      <div className="thead">
        <div className="tr">
          {columnKeys.map((key) => (
            <div className="th" key={key}>
              {columns[key]}
            </div>
          ))}
        </div>
      </div>
      <div className="tbody">
        {error ?? undefined}
        {!error && (!data || data.length === 0) && <div className="empty">No data</div>}
        {data.map((item) => (
          <div className="tr" key={item.key}>
            {columnKeys.map((key) => (
              <div className="td" key={key} data-label={columns[key]}>
                {item[key] || '---'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </STable>
  )
}

Table.defaultProps = {
  columns: {},
  data: [],
  error: false,
}
