import React from 'react'
import { Meta, Story } from '@storybook/react'

import { UiKit, UiKitProperties } from './UiKit'

export default {
  component: UiKit,
  title: 'UiKit',
} as Meta

const Template: Story<UiKitProperties> = (arguments_) => <UiKit {...arguments_} />

export const Primary = Template.bind({})
Primary.args = {
  id: '1',
  title: '123243532',
  color: 'pink',
}
