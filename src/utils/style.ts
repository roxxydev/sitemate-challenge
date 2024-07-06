import { Platform, StyleSheet, Text, TextInput } from 'react-native'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native'
import {
  adaptNavigationTheme,
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
  useTheme
} from 'react-native-paper'
import {
  type MD3Theme,
  type MD3Typescale
} from 'react-native-paper/lib/typescript/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { darkMD3Colors, lightMD3Colors } from './colors'

export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: lightMD3Colors
}

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 2,
  colors: darkMD3Colors
}

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  materialLight: lightTheme
})
const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
  materialDark: darkTheme
})

export { LightTheme as NavigationLightTheme }
export { DarkTheme as NavigationDarkTheme }

export const useAppStyle = () => {
  const insets = useSafeAreaInsets()
  const theme = useTheme()
  const style = StyleSheet.create({
    container: {
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10
    },
    safeContainer: {
      marginTop: insets.top,
      marginBottom: insets.bottom,
      marginLeft: insets.left + 10,
      marginRight: insets.right + 10
    }
  })
  return style
}
