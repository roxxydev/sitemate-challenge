import _ from 'lodash'
import {
  MMKV,
  useMMKVObject,
} from 'react-native-mmkv'
import { Article } from './sitemate_types'

export const storage = new MMKV()

export const useRecentSearchesStore = () => {
  const [searchResult, setSearchResult] = useMMKVObject<Article[]>(
    'user.searches',
    storage
  )

  const recentSearches = _.filter(searchResult, (article: Article) => {
    return article.title.length && article.title !== '[Removed]'
  })

  return [recentSearches ?? [], setSearchResult] as const
}
