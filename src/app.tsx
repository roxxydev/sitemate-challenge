import {
  createNavigationContainerRef,
  NavigationContainer
} from '@react-navigation/native'
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'
import React, { useEffect } from 'react'
import {
  Appearance,
  AppState,
  StatusBar,
  useColorScheme
} from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { SWRConfig } from 'swr'

import OnboardingStartScreen from './screens/onboarding/start'
import SearchScreen from './screens/search'
import {
  NavigationDarkTheme,
  NavigationLightTheme
} from './utils/style'

export type NavigationParamsList = {
  OnboardingStart: undefined
  Search:
    | {
        phrase: string
      }
    | undefined
}

const StackNavigator = createStackNavigator<NavigationParamsList>()

export const navigationRef =
  createNavigationContainerRef<NavigationParamsList>()

const App = () => {
  const routeNameRef = React.useRef<string | undefined>()
  const isOnboarded = false

  const initialRouteName = !isOnboarded
    ? 'OnboardingStart'
    : 'Search'
  const scheme = useColorScheme()

  useEffect(() => {
    Appearance.setColorScheme(scheme)
  }, [])

  const handleStateChange = async () => {
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name
    routeNameRef.current = currentRouteName
  }

  return (
    <PaperProvider>
      <StatusBar
        backgroundColor={scheme === 'dark' ? 'black' : 'white'}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <SWRConfig
        value={{
          provider: () => new Map(),
          isOnline() {
            return true
          },
          isVisible: () => {
            return true
          },
          initFocus(callback) {
            // Subscribe to the app state change events
            const subscription = AppState.addEventListener(
              'change',
              (nextAppState) => {
                if (nextAppState === 'active') {
                  callback()
                }
              }
            )
            return () => {
              subscription.remove()
            }
          }
        }}
      >
        <NavigationContainer
          theme={
            scheme === 'dark' ? NavigationDarkTheme : NavigationLightTheme
          }
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current =
              navigationRef.current?.getCurrentRoute()?.name
          }}
          onStateChange={() => void handleStateChange()}
        >
          <StackNavigator.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{
              headerShown: false
            }}
          >
            <StackNavigator.Group
              screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
              }}
            >
              <StackNavigator.Screen
                name="OnboardingStart"
                component={OnboardingStartScreen}
                options={{
                  animationEnabled: false
                }}
              />
            </StackNavigator.Group>
            <StackNavigator.Screen
              options={{
                ...TransitionPresets.SlideFromRightIOS
              }}
              name="Search"
              component={SearchScreen}
            />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </SWRConfig>
    </PaperProvider>
  )
}

export default App
