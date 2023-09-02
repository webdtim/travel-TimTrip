import { SearchAttractionData } from './types'
import Card from 'components/cards/Card'

interface SearchResultProps {
  searchResults: SearchAttractionData[]
}

const Search = ({ searchResults }: SearchResultProps) => {
  return (
    <div className="container">
      {searchResults.map((item: SearchAttractionData) => (
        <Card
          title={item.name}
          link={`/search/${item.friendlyURL}`}
          desc={item.miniDesc}
          img={item.photo[0]}
          location={item.location}
          rating={item.rating}
          reviewsCount={item.reviewsCount}
        />
      ))}
    </div>
  )
}

export default Search
