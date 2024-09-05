import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CategoryCard from "./CategoryCard";

const BookCategories = () => {
  return (
    <div className="bg-lightGreen  px-24 py-12 my-16 min-h-[60vh]">
      <div className="">
        <h1 className="text-xl lg:text-4xl text-themeColor text-center">
          Top Categorys Books
        </h1>
        <div className="border-2 px-8 py-4 pt-8">
          <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            className="min-h-[50vh]"
          >
            <SwiperSlide className=" h-full">
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide className=" h-full">
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide className=" h-full">
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide className=" h-full">
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide className=" h-full">
              <CategoryCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BookCategories;
