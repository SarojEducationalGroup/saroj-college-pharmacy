
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const eventImages = [
  {
    image: '/event-gallery/3.jpg',
    title: 'Annual Science Fair 2025',
  },
  {
    image: '/event-gallery/2.jpg',
    title: 'Pharmacy Workshop on Drug Development',
  },
  {
    image: '/event-gallery/1.jpg',
    title: 'Guest Lecture by Dr. Mehta',
  },
];

export default function EventGallerySlider() {
  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Event Highlights</h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          {eventImages.map((event, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">{event.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
