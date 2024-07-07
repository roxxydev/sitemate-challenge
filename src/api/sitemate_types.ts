export type Api = {
  status: string,
  totalResults: number,
  articles: Article[],
  [property: string]: any
}

export type Article = {
  source: ArticleSource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage?: string,
  content: string,
  publishedAt: string,
  [property: string]: any
}

export type ArticleSource = {
  id: number | null,
  name: string
}
