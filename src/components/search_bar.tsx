import * as React from 'react'
import { StyleSheet } from 'react-native'
import _ from 'lodash'
import { Appbar, Searchbar, useTheme } from 'react-native-paper'

import { useAppNavigation } from '~/utils/navigation'

interface SearchBarProps {
  showBack?: boolean
  onChangeText: (query: string) => void
  placeholder: string
  isLoading?: boolean
  autoFocus?: boolean
  modal?: boolean
}

const SearchBar = (props: SearchBarProps) => {
  const theme = useTheme()
  const navigation = useAppNavigation()
  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <Appbar.Header
      mode="small"
      statusBarHeight={props.modal != null ? 0 : undefined}
      theme={{ colors: { surface: theme.colors.background } }}
    >
      {props.showBack != null && (
        <Appbar.Action
          icon="arrow-left"
          onPress={() => {
            navigation.goBack()
          }}
        />
      )}
      <Searchbar
        icon="search"
        clearIcon="x-circle"
        loading={props.isLoading}
        autoCapitalize="none"
        autoComplete="off"
        placeholder={props.placeholder}
        onChangeText={(value) => {
          setSearchQuery(value)
          props.onChangeText(_.toLower(value))
        }}
        value={searchQuery}
        style={styles.searchbar}
        autoFocus={props.autoFocus}
        theme={{ roundness: 4 }}
      />
      {props.modal != null && (
        <Appbar.Action
          icon="x-circle"
          onPress={() => {
            navigation.goBack()
          }}
        />
      )}
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  searchbar: {
    flex: 1,
    marginRight: 10
  }
})

export default SearchBar
