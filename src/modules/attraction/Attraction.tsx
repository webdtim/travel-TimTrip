import GalleryCarousel from 'components/gallery-carousel/GalleryCarousel'
import NavAttraction from './components/nav-attraction/NavAttraction'
import BodyAttraction from './components/body-attraction/BodyAttraction'
import Rating from 'components/rating/Rating'
import Tag from 'components/tag/Tag'
import Collapse from 'UI/collapse/Collapse'
import Text from 'UI/text/Text'
import { TagType } from 'components/tag/tagTypes'
import { TextType } from 'UI/text/textTypes'
import './attraction.scss'

interface AttractionProps {
  photo: string[]
  name: string
  description: TextType[]
  rating?: number
  tags?: TagType[]
}

const Attraction = ({
  photo,
  name,
  description,
  rating,
  tags,
}: AttractionProps) => {
  return (
    <div className="attraction">
      <GalleryCarousel slideList={photo}></GalleryCarousel>
      <NavAttraction />
      <BodyAttraction>
        <h1 className="attraction__h1">{name}</h1>
        <div className="attraction__rating-and-catergory">
          {rating && <Rating rating={rating} />}
          {tags &&
            tags.map((tagProps: TagType) => (
              <Tag key={tagProps.id} {...tagProps}></Tag>
            ))}
        </div>
        <div className="attraction__desc">
          <Collapse btnText="ещё">
            {description.map((textBlock: TextType, index: number) => (
              <Text
                key={index}
                as={'h2'}
                title={textBlock.title}
                text={textBlock.text}
              ></Text>
            ))}
          </Collapse>
        </div>
      </BodyAttraction>
    </div>
  )
}

export default Attraction
