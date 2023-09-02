import { TagType } from 'components/tag/tagTypes'

export interface SearchAttractionData {
  _id: string
  friendlyURL: string
  coord: {
    longitude: number
    latitude: number
  }
  photo: string[]
  name: string
  miniDesc?: string
  desciption?: string
  location?: string
  rating?: number
  tags?: TagType[]
  reviewsCount?: number
}
