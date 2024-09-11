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
    <div className="bg-lightGreen  lg:px-24 px-4 py-3 lg:py-12 my-16 min-h-[60vh]">
      <div className="">
        <h1 className="text-xl lg:text-4xl text-themeColor text-center">
          Top Categorys Books
        </h1>
        <div className=" lg:px-8 px-2 lg:py-4 lg:pt-8">
          {bookData.length && (
            <Swiper
              // install Swiper modules
              modules={[Pagination, Scrollbar, Autoplay, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="lg:min-h-[50vh] min-h-[60vh]"
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
