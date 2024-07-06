import _, { sortBy } from 'lodash'
import qs from 'qs'
import { Platform } from 'react-native'
import useSWR, { preload, type SWRConfiguration, useSWRConfig } from 'swr'
import useSWRMutation from 'swr/mutation'
import { config } from '~/utils/config'

import { type Api } from './sitemate_types'

type ApiEndPoint =
  | 'everything'

type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | JSONValue[]
  | null

// TODO: type params for endpoints
type EndPointParams = Record<string, JSONValue>

type FetcherParams = {
  endPoint: ApiEndPoint
  params?: EndPointParams
  method?: 'GET' | 'POST' | 'DELETE'
}

function alphabeticalSort(a: string, b: string) {
  return a.localeCompare(b)
}

// Fetcher for SWR, adds signature to URL as required by News Api.
const fetcher = async ({ endPoint, params, method = 'GET' }: FetcherParams) => {
  params = { ...params }
  params.apiKey = config.apiKey
  const queryString = qs.stringify(params, { sort: alphabeticalSort })
  const url = config.apiUrl + endPoint + '?' + queryString
  console.log('url:', url)
  console.log('params:', decodeURIComponent(queryString))
  const request = new Request(url, {
    method,
  })
  const response = await fetch(request)

  const text = await response.text()

  let json
  try {
    json = JSON.parse(text) as Api
  } catch (e) {
    throw new Error(text)
  }
  if (!response.ok) {
    console.log('ERROR from Api:', url, json)
    if ('message' in json) {
      throw new Error(String(json.message))
    } else {
      throw new Error(response.statusText)
    }
  }
  return json
}

export const useApi = (
  endPoint?: ApiEndPoint | null,
  params?: EndPointParams,
  method: 'GET' | 'POST' | 'DELETE' = 'GET',
  options?: SWRConfiguration
) => {
  return useSWR<Api | undefined, Error, FetcherParams | null>(
    endPoint != null
      ? {
          endPoint,
          params,
          method
        }
      : null,
    fetcher,
    { revalidateOnFocus: method === 'GET', ...options }
  )
}

export const useNewsSearch = (phrase?: string) => {
  const { data, isLoading, error } = useApi(
    phrase != null ? 'everything' : undefined,
    phrase != null
      ? {
          q: _.trim(phrase),
          sortBy: 'popularity'
        }
      : undefined
  )

  return {
    data: data?.articles,
    isLoading,
    error
  }
}
