import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
interface SliderProps {
  slideList: string[]
  settings?: Settings
}

const Carousel = ({ slideList, settings }: SliderProps) => {
  return (
    <Slider {...settings}>
      {slideList.map((imgUrl: string) => (
        <div className={settings?.className + '__slide'} key={imgUrl}>
          <img src={imgUrl} alt="" />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel
