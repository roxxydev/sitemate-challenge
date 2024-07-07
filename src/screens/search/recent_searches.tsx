import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import _, { isEmpty } from 'lodash'
import {
  IconButton,
  Surface,
  Text,
  TouchableRipple
} from 'react-native-paper'
import { useRecentSearchesStore } from '~/api/storage';
import ImageScaled from '~/components/image_scaled';
import { Article } from '~/api/sitemate_types';
import { useAppStyle } from '~/utils/style';

export type RecentSearchesProps = {
  searchText?: string
}

function RecentSearches({ searchText }: RecentSearchesProps) {
  const style = useAppStyle()
  const { width } = useWindowDimensions()
  const [recentSearches, setRecentSearches] = useRecentSearchesStore()

  const onPress = () => {
    // TODO: Navigate to news details
  }

  return (
    <View style={{ gap: 12 }}>
      {!_.isEmpty(recentSearches) && !isEmpty(searchText) && (
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
      )}
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
            .map((article: Article, index) => {
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
                    { article.urlToImage != null && (
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
                          src={article.urlToImage}
                          style={{
                            width: width / 3.5,
                            height: '100%',
                            aspectRatio: 'auto'
                          }}
                        />
                      </Surface>
                    )}
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <Text variant="titleSmall"
                        style={{ paddingRight: style.safeContainer.marginRight }}
                        numberOfLines={2}
                      >
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
