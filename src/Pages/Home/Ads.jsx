import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Ads = () => {
  return (
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
        modules={[Autoplay, Pagination]}
         className="rounded-lg overflow-hidden"
      >
        <SwiperSlide><img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/Social-media-advertising-and-design-tips.jpeg?auto=format&q=60&fit=max&w=930' alt='add' className='w-full  object-contain rounded-lg '/></SwiperSlide>
        <SwiperSlide><img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/Social-media-advertising-and-design-tips.jpeg?auto=format&q=60&fit=max&w=930' alt='add'className='w-full object-contain rounded-lg '/></SwiperSlide>
        <SwiperSlide><img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/Social-media-advertising-and-design-tips.jpeg?auto=format&q=60&fit=max&w=930' alt='add'className='w-full  object-contain rounded-lg '/></SwiperSlide>
      
   
      </Swiper>
  )
}

export default Ads

