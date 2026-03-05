// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/Slider.css";
import { Navigation } from "swiper/modules";
import HeroImage from "@/assets/images/Hero01.png";

const Hero = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={HeroImage} alt="hero" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroImage} alt="hero" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroImage} alt="hero" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
