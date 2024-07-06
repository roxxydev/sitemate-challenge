import {
  RouteProp,
  useNavigation,
  useRoute
} from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'

import { type NavigationParamsList } from '~/app'

export const useAppNavigation = useNavigation<
  StackNavigationProp<NavigationParamsList>
>

export const useAppRoute = <T extends keyof NavigationParamsList>() =>
  useRoute<RouteProp<NavigationParamsList, T>>()
