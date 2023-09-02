export type TCoord = {
  longitude: Number
  latitude: Number
}

export type TSearchResult = {
  _id: string
  name: string
  location: string
  type: string
  mainPhoto?: string
  coord: TCoord
  // highlightingInfo: [{length: 5, offset: 30}] - для подсветки релевантных слов для поиска
}

export type TSearchData = {
  queryString: string
  categories?: string[]
  coord: TCoord
  radius?: number
}

export type TSearchFn = (
  parapms: TSearchData
) => Promise<{ data: TSearchResult[] }>

export type TSearch = {}
