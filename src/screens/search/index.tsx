import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'

import { useNewsSearch } from '~/api/sitemate'
import SearchBar from '~/components/search_bar'
import { useAppRoute } from '~/utils/navigation'
import { useAppStyle } from '~/utils/style'

import RecentSearches from './recent_searches'
import ErrorCard from '~/components/error_card'
import { Skeleton } from 'react-native-skeletons'
import { useRecentSearchesStore } from '~/api/storage'

function SearchScreen() {
  const style = useAppStyle()
  const theme = useTheme()
  const route = useAppRoute<'Search'>()
  const [searchQuery, setSearchQuery] = useState<string | undefined>(
    route.params?.phrase
  )
  const { data, isLoading: isSearchLoading, error } =
    useNewsSearch(searchQuery)
  const [, setSearchResult] = useRecentSearchesStore()

  useEffect(() => {
    if (!isSearchLoading && searchQuery != null) {
      setSearchResult(data)
    }
  }, [isSearchLoading, data])

  return (
    <>
      <SearchBar
        placeholder={'Search for news'}
        onChangeText={_.debounce((value: string) => {
          value.length >= 2 ? setSearchQuery(value) : setSearchQuery(undefined)
        }, 250)}
        isLoading={isSearchLoading}
        autoFocus
      />
      {
        (data != null && data.length) && isSearchLoading ? (
          _.times(data.length, (index) => (
            <Skeleton
              key={index}
              count={1}
              width="30%"
              height={80}
              color={theme.colors.surfaceVariant}
            />
          ))
        ) : error != null ? (<ErrorCard error={ error }/>) : (
        <ScrollView
          contentContainerStyle={[{ gap: 12 }, style.container]}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
        >
          <RecentSearches searchText={searchQuery}/>
        </ScrollView>
      )}
    </>
  )
}

export default SearchScreen
