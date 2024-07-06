import * as React from 'react'
import { Text } from 'react-native-paper'

const ErrorCard = ({
  error
}: {
  error: Error
}) => {

  return (
      <Text variant='titleSmall'
      >
        {error.message}
      </Text>
  )
}

export default ErrorCard
