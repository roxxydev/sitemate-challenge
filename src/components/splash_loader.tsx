import * as React from 'react'
import { type PropsWithChildren } from 'react'
import { type StyleProp, View, type ViewStyle } from 'react-native'
import { ActivityIndicator, useTheme } from 'react-native-paper'

type LoaderProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>
}>

const SplashLoader = ({ style, children }: LoaderProps) => {
  const theme = useTheme()
  return (
    <View
      style={[
        {
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          flex: 1,
          gap: 12,
          width: '100%',
          backgroundColor: theme.colors.background
        },
        style
      ]}
    >
      <ActivityIndicator />
      {children}
    </View>
  )
}

export default SplashLoader
