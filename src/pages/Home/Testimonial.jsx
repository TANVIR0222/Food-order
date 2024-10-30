import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
// import { data } from "autoprefixer";
import { Rating } from "@smastrom/react-rating";
import { useAllReviewsQuery } from "@/app/features/revicw/reviewApi";

const Testimonial = () => {
  const { data: reviews } = useAllReviewsQuery();
  console.log(reviews);
  // console.log(data);

  return (
    <>
      <div className="  my-6 space-y-4 text-sm md:text-2xl ">
        <h5 className="text-red uppercase">User Reviews</h5>
        <h1 className="text-2xl md:text-4xl font-bold uppercase">
          Now Your time
        </h1>
      </div>

      <section className="my-20  shadow-xl shadow-blue-600">
        <Swiper
          navigation={true}
          autoplay={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          {reviews?.newReview.map((review) => (
            <SwiperSlide key={review._id}>
              <div className=" flex flex-col items-center my-16 mx-24">
                <h1 className="text-5xl text-black py-4">
                  <FaQuoteLeft />
                </h1>
                <Rating
                  style={{ maxWidth: 80 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8">{review.message}</p>
                <h2 className="text-2xl text-[#CD9003] ">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
