import React, { useEffect } from 'react'
import SplashLoader from '~/components/splash_loader'
import { useAppNavigation } from '~/utils/navigation'

const OnboardingStartScreen = () => {
  const navigation = useAppNavigation()

  useEffect(() => {
    // Here we can load any config or setup needed like initial api calls
    // TODO: For now we just skip to search screen
    setTimeout(() => {
      navigation.replace('Search')
    }, 1000)
  }, [])

  return <SplashLoader />
}

export default OnboardingStartScreen
