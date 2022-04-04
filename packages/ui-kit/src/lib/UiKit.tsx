import React, { FC } from 'react'
import styled from 'styled-components'

export interface UiKitProperties {
  /** Id */
  id?: string
  /** Title */
  title?: string
  /** Color */
  color?: string
}

const StyledUiKit = styled.div<UiKitProperties>`
  color: pink;
  font-family: -apple-system, serif;

  border: none;
`

export const UiKit: FC<UiKitProperties> = ({ id, title, color }) => (
  <StyledUiKit id={id} style={{ color: color }}>
    <h1>{title}</h1>
  </StyledUiKit>
)

UiKit.defaultProps = {
  title: 'Welcome to UiKit!',
  color: 'pink',
}

export const Button: FC = () => <div>123</div>
