import * as React from 'react'
import { Divider, type DividerProps } from 'react-native-paper'

const AppDivider = (props: DividerProps) => {
  return <Divider bold {...props} style={{ margin: 4 }} />
}

export default AppDivider
