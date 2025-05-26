import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const companyLogos = [
  '/company-logo/1.png',
  '/company-logo/2.png',
  '/company-logo/3.png',
  '/company-logo/4.png',
  '/company-logo/3.png',
];

export default function PartnerLogoSlider() {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Our Hiring Partners</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={10} 
        loop={true}
        autoplay={{ delay: 1500 }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        {companyLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={logo} alt={`Company ${index + 1}`} className="h-20 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
