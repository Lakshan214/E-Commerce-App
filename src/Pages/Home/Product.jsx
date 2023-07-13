import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';
import { IconButton } from '@mui/material';

const productArr=[
    {
        price:'100',
        ProductTitle:'product taiatal',
        imageUrl:'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/Social-media-advertising-and-design-tips.jpeg?auto=format&q=60&fit=max&w=930'
    },
    
    {
        price:'100',
        ProductTitle:'product taiatal',
        imageUrl:'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/Social-media-advertising-and-design-tips.jpeg?auto=format&q=60&fit=max&w=930'
    }, {
        price:'100',
        ProductTitle:'product taiatal',
        imageUrl:'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/Social-media-advertising-and-design-tips.jpeg?auto=format&q=60&fit=max&w=930'
    }, {
        price:'100',
        ProductTitle:'product taiatal',
        imageUrl:'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/Social-media-advertising-and-design-tips.jpeg?auto=format&q=60&fit=max&w=930'
    },
]

const Product = ({title,rowsCount,slidesPerView}) => {
  return (
    <section className='w-full mt-5'>
      <h1 className='text-lg font-bold mb-3'>{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows:Number( rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {productArr.map(({imageUrl,price,ProductTitle},index)=>
        <SwiperSlide key={index}>
            <ProductUnit imageUrl={imageUrl}
            price={price}
            ProductTitle={ProductTitle}
            id={index}/>
        </SwiperSlide>)}
   
      </Swiper>
    </section>
  )
}

export default Product


const ProductUnit=({imageUrl,price,ProductTitle,id })=>
<IconButton sx={{
    padding:'4px',
    borderRadius:'5px',
    color:'red',
}}>

<div className="w-full mb-7">

<img src={imageUrl} alt={`product_unit_${id}`} className="w-full object-contain" />
    <h3 className='text-sm font-semibold text-stone-900'>{ProductTitle}</h3>
    <h3 className='text-stone-900'>RS.{price}/=</h3>


</div>
</IconButton>