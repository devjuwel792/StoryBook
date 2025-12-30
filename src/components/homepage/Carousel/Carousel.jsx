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
      id: 1,
      src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Books on a shelf"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Library books"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Person reading a book"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Open book with glasses"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Stack of books"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Bookstore with many books"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Colorful books arranged"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Books on a table"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Library interior"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Books with coffee"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Book in hands"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern library"
    },
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