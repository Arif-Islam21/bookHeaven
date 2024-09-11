import { Link } from "react-router-dom";

const CategoryCard = ({ book }) => {
  const { category, photo } = book;
  return (
    <div className="avatar flex flex-col p-4">
      <div className=" p-3 bg-themeColor  rounded-full ">
        <div className=" lg:p-10 p-4 border-2  border-dashed border-deepGreen  rounded-full">
          <img
            className="lg:rounded-lg rounded-full  p-4 lg:max-h-40 max-h-[35vh] w-auto"
            src={photo}
          />
        </div>
      </div>
      <Link
        to={`/bookCategory/${category}`}
        className="my-4 text-center text-xl font-semibold text-deepGreen"
      >
        {category}
      </Link>
    </div>
  );
};

export default CategoryCard;
