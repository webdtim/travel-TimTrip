import cn from 'classnames'
import './photo-point.scss'

interface PhotoPointProps {
  imageURL: string
  name: string
  isBigPhoto: boolean
}

const PhotoPoint = ({ name, imageURL, isBigPhoto }: PhotoPointProps) => {
  const classList = cn('photo-point', { 'photo-point--big': isBigPhoto })

  console.log('я фото на карте поиска и я ререндерюсь')

  return (
    <div className={classList}>
      <div
        className="photo-point__img"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <span className="photo-point__name">{name}</span>
    </div>
  )
}

export default PhotoPoint
