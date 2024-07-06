import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native-paper'

import { useNewsSearch } from '~/api/sitemate'
import { useRecentSearchesStore } from '~/api/storage'
import SearchBar from '~/components/search_bar'
import { useAppNavigation, useAppRoute } from '~/utils/navigation'
import { useAppStyle } from '~/utils/style'

import RecentSearches from './recent_searches'
import ErrorCard from '~/components/error_card'

function SearchScreen() {
  const style = useAppStyle()
  const navigation = useAppNavigation()
  const route = useAppRoute<'Search'>()
  const [searchQuery, setSearchQuery] = useState<string | undefined>(
    route.params?.phrase
  )
  const { data: searchResult, isLoading: isSearchLoading, error } =
    useNewsSearch(searchQuery)
  const [, setRecentSearches] = useRecentSearchesStore()

  useEffect(() => {
    if (searchResult != null) {
      setRecentSearches(searchResult)
    }
  }, [searchResult])

  return (
    <>
      <SearchBar
        showBack
        placeholder={'Search for anything'}
        onChangeText={_.debounce((value: string) => {
          value.length >= 2 ? setSearchQuery(value) : setSearchQuery(undefined)
        }, 250)}
        isLoading={isSearchLoading}
        autoFocus
      />
      {
        !_.isEmpty(searchResult) || isSearchLoading ? (
          <ActivityIndicator />
        ) : error != null ? (<ErrorCard error={ error }/>) : (
        <ScrollView
          contentContainerStyle={[{ gap: 12 }, style.container]}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
        >
          <RecentSearches />
        </ScrollView>
      )}
    </>
  )
}

export default SearchScreen
