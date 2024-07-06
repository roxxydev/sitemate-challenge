import {
  useNavigation
} from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'

import { type NavigationParamsList } from '~/app'

export const useAppNavigation = useNavigation<
  StackNavigationProp<NavigationParamsList>
>
