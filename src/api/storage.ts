import _ from 'lodash'
import {
  MMKV,
  useMMKVObject,
} from 'react-native-mmkv'

export const storage = new MMKV()

export const useRecentSearchesStore = () => {
  const [recentSearches, setRecentSearches] = useMMKVObject<string[]>(
    'user.searches',
    storage
  )

  return [recentSearches ?? [], setRecentSearches] as const
}
