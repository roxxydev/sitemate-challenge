import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import _ from 'lodash'
import {
  IconButton,
  Surface,
  Text,
  TouchableRipple
} from 'react-native-paper'
import { useRecentSearchesStore } from '~/api/storage';
import ImageScaled from '~/components/image_scaled';
import { Article } from '~/api/sitemate_types';

function RecentSearches() {
  const { width } = useWindowDimensions()
  const [recentSearches, setRecentSearches] = useRecentSearchesStore()

  const onPress = () => {
    // TODO: Navigate to news details
  }

  if (_.isEmpty(recentSearches)) {
    return null
  }

  return (
    <View style={{ gap: 12 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Text variant="headlineSmall">
          {'Results'}
        </Text>
        <IconButton
          size={15}
          icon="trash"
          mode="contained"
          style={{ marginLeft: 'auto' }}
          onPress={() => {
            setRecentSearches([])
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 6
        }}
      >
        {
          _(recentSearches)
            .map((searchItem, index) => {
              // FIXME: Fix type in mmkv
              const article = searchItem as Article
              return (
                <TouchableRipple
                  onPress={() => {
                    onPress()
                  }}
                  borderless
                  key={index}
                  style={{
                    height: 80,
                    borderRadius: 6,
                    width: '100%'
                  }}
                >
                  <View style={{ flex: 1, flexDirection: 'row', gap: 12 }}>
                    <Surface
                      mode="flat"
                      style={{
                        height: '100%',
                        alignItems: 'center',
                        borderRadius: 6,
                        padding: 4
                      }}
                    >
                      <ImageScaled
                        src={imgUrl}
                        style={{
                          width: width / 3.5,
                          height: '100%',
                          aspectRatio: 'auto'
                        }}
                      />
                    </Surface>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <Text variant="titleSmall">
                        {article.title}
                      </Text>
                    </View>
                  </View>
                </TouchableRipple>
              )
            })
            .value()
        }
      </View>
    </View>
  )
}

export default RecentSearches
