const configs = {
  dev: {
    dev: true,
    prod: false,
    apiUrl: 'https://newsapi.org/v2/',
    apiKey: '183daca270264bad86fc5b72972fb82a'
  },
  prod: {
    prod: true,
    dev: false,
    apiUrl: 'https://newsapi.org/v2/',
    apiKey: '183daca270264bad86fc5b72972fb82a'
  }
}

export const config = __DEV__ ? configs.prod : configs.prod
