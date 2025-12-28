import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Carousel.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SwiperSlider = () => {
  const slides = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 1"
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 2"
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 3"
    },
    {
      id: 4,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 4"
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 5"
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 5"
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 5"
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 5"
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 5"
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 5"
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 5"
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1756757313563-73d46a8e8665?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "slide 5"
    },
  ];

  return (
    <div className="swiper-container two py-12 flex justify-center items-center">
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        pagination={{ clickable: true }}
        effect="coverflow"
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider-image">
              <img src={slide.src} alt={slide.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperSlider;