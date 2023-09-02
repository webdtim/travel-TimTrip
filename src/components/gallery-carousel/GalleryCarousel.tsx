import { ReactNode } from 'react'
import Carousel from 'UI/carousel/Carousel'
import './gallery-carousel.scss'

interface CarouselProps {
  slideList: string[]
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  className: 'gallery-carousel',
  appendDots: (dots: ReactNode) => (
    <div>
      <ul className="gallery-carousel__dots-list">{dots}</ul>
    </div>
  ),
  dotsClass: 'gallery-carousel__dots',
  customPaging: () => (
    <button className="gallery-carousel__dot-btn">
      <span className="gallery-carousel__dot"></span>
    </button>
  ),
  // красим просмотренные слайды
  beforeChange: (current: number, next: number) => {
    const dots = document.querySelectorAll(
      '.gallery-carousel__dots span.gallery-carousel__dot'
    )
    dots.forEach((dot, index) => {
      index < next
        ? dot.classList.add('gallery-carousel__dot--viewed')
        : dot.classList.remove('gallery-carousel__dot--viewed')
    })
  },
  waitForAnimate: false,
}

const GalleryCarousel = ({ slideList }: CarouselProps) => {
  return <Carousel slideList={slideList} settings={settings}></Carousel>
}

export default GalleryCarousel
