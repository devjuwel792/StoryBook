import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Carousel.css';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const SwiperSlider = () => {
const slides = [
  {
    id: 13,
    src: "https://covers.openlibrary.org/b/id/8479570-L.jpg",
    alt: "Swashbuckling pirate adventure book cover"
  },
  {
    id: 14,
    src: "https://covers.openlibrary.org/b/id/13023182-L.jpg",
    alt: "Fairy tale castle and dragon illustration"
  },
  {
    id: 15,
    src: "https://covers.openlibrary.org/b/id/14514234-L.jpg",
    alt: "Jungle exploration adventure book cover"
  },
  {
    id: 16,
    src: "https://covers.openlibrary.org/b/id/13725757-L.jpg",
    alt: "Enchanted forest fairy tale cover"
  },
  {
    id: 17,
    src: "https://covers.openlibrary.org/b/id/14613767-L.jpg",
    alt: "Desert treasure hunt adventure cover"
  },
  {
    id: 18,
    src: "https://covers.openlibrary.org/b/id/14220986-L.jpg",
    alt: "Magical fairy kingdom book illustration"
  },
  {
    id: 19,
    src: "https://covers.openlibrary.org/b/id/14169531-L.jpg",
    alt: "Space exploration sci-fi adventure cover"
  },
  {
    id: 20,
    src: "https://covers.openlibrary.org/b/id/14015657-L.jpg",
    alt: "Classic fairy tale with princess and frog"
  },
  {
    id: 21,
    src: "https://covers.openlibrary.org/b/id/13906894-L.jpg",
    alt: "Mountain climbing expedition adventure"
  },
  {
    id: 22,
    src: "https://covers.openlibrary.org/b/id/13872150-L.jpg",
    alt: "Mythical creatures fairy tale collection"
  },
  {
    id: 23,
    src: "https://covers.openlibrary.org/b/id/13792161-L.jpg",
    alt: "Undersea adventure with submarines"
  },
  {
    id: 24,
    src: "https://covers.openlibrary.org/b/id/13623440-L.jpg",
    alt: "Enchanted fairy garden storybook"
  }
];


  return (
    <div className="swiper-container  two py-2 flex justify-center items-center">
<Swiper
  modules={[EffectCoverflow, Autoplay]}
  effect="coverflow"
  loop={true}
  centeredSlides={true}
  slidesPerView={5}
  spaceBetween={30}   // ⬅ spacing handled here
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,       // ⬅ IMPORTANT: must be 0
    depth: 180,
    modifier: 1.3,
    slideShadows: false,
  }}
  className="mySwiper w-full"
  style={{
    marginLeft:'10px'
  }}
>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider-image ">
              <img className='' src={slide.src} alt={slide.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="swiper-pagination"></div> */}
    </div>
  );
};

export default SwiperSlider;