import { Rating } from "@smastrom/react-rating";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";

import { RiDoubleQuotesL } from "react-icons/ri";

import SectionTitile from "../../../Components/SectionTitle/SectionTitile";


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // const {details, name, rating} = reviews;

  return (
    <div className="my-8">
      <SectionTitile
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitile>

      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center space-y-4 mx-16 p-8">
              <Rating 
              style={{ maxWidth: 180 }}
               value={review.rating} 
               readOnly 
               />
               <RiDoubleQuotesL className="text-6xl" />

              <p className="text-xl text-center">{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
