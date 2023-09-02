import { Link } from 'react-router-dom'
import Rating from 'components/rating/Rating'
import Btn from 'UI/button/Btn'
import { ReactComponent as Like } from 'uploads/like.svg'
import './card.scss'
import { TCard } from 'types/card'

const Card: React.FC<TCard> = ({
  title,
  link,
  desc,
  img,
  price,
  location,
  rating,
  reviewsCount,
}) => {
  return (
    <div className="card">
      <Link className="card__link" title={`подробнее о ${title}`} to={link}>
        <div className="card__img-wrap">
          <img src={img} alt={title + ' фото'} />
        </div>
        <div className="card__body">
          <div className="card__info">
            {rating && <Rating rating={rating} />}
            {reviewsCount && (
              <div className="card__reviews">{reviewsCount}</div>
            )}
            {location && <div className="card__location">{location}</div>}
          </div>
          <div className="card__title">{title}</div>
          {desc && <div className="card__desc">{desc}</div>}
          {price && <div className="card__price">{price}</div>}
        </div>
      </Link>
      <div className="card__action">
        <Btn modifiers={['ellipse']}>
          <Like />
        </Btn>
      </div>
    </div>
  )
}

export default Card
