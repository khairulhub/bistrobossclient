import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import SectionTitile from "../../../Components/SectionTitle/SectionTitile";
import categoryimg1 from "../../../assets/home/slide1.jpg";
import categoryimg2 from "../../../assets/home/slide2.jpg";
import categoryimg3 from "../../../assets/home/slide3.jpg";
import categoryimg4 from "../../../assets/home/slide4.jpg";
import categoryimg5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <section>
          <SectionTitile   heading='ORDER ONLINE' subHeading='From 11:00am to 10:00pm' ></SectionTitile>



    
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-4 mb-10"
      >
        <SwiperSlide>
          {" "}
          <img src={categoryimg1} />{" "}
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">
            Salads
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={categoryimg2} />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={categoryimg3} />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={categoryimg4} />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={categoryimg5} />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
