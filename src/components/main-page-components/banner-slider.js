import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Context } from '../..';

const BannerSlider = observer(() => {
    const { shop } = useContext(Context)
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
        >
            {
                shop.mainPageBannerSlider.slides.map(m => 
                     <SwiperSlide key={m.id}>
                        <div className='bg-image' style={{backgroundImage:`url('${m.img}')`}}>

                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
})

export default BannerSlider;
