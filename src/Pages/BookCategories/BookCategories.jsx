import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { useEffect, useState } from "react";

const BookCategories = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/addedBooks`).then((res) => {
      setBookData(res.data);
    });
  }, []);
  // console.log(bookData);

  return (
    <div className="bg-lightGreen  px-24 py-12 my-16 min-h-[60vh]">
      <div className="">
        <h1 className="text-xl lg:text-4xl text-themeColor text-center">
          Top Categorys Books
        </h1>
        <div className="border-2 px-8 py-4 pt-8">
          {bookData.length && (
            <Swiper
              // install Swiper modules
              modules={[Pagination, Scrollbar, Autoplay, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
              className="lg:min-h-[50vh]"
            >
              {bookData?.map((book) => (
                <SwiperSlide key={book._id} className=" h-full">
                  <CategoryCard book={book} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCategories;
