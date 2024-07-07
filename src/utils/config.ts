const configs = {
  dev: {
    dev: true,
    prod: false,
    apiUrl: 'https://newsapi.org/v2/',
    apiKey: '467521a0e6b54b64850d6bb8a4d7240e'
  },
  prod: {
    prod: true,
    dev: false,
    apiUrl: 'https://newsapi.org/v2/',
    apiKey: '467521a0e6b54b64850d6bb8a4d7240e'
  }
}

export const config = __DEV__ ? configs.prod : configs.prod
