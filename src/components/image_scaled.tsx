import * as React from 'react'
import { useEffect, useState } from 'react'
import { Image, type ImageProps } from 'react-native'
import _ from 'lodash'

const ImageScaled = (props: ImageProps) => {
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  )

  useEffect(() => {
    if (!_.isEmpty(props.src)) {
      Image.getSize(props.src!, (width, height) => {
        setSize({ width, height })
      })
    }
  }, [props.src])

  if (size == null || props.src == null) {
    return null
  }

  return (
    <Image
      {...props}
      style={[
        {
          resizeMode: 'contain',
          aspectRatio:
            size.width > size.height
              ? size.width / size.height
              : size.height / size.width
        },
        props.style
      ]}
    />
  )
}

export default ImageScaled
