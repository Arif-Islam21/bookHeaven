import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  const {
    bookName,
    photo,
    quantity,
    author,
    category,
    shortDescription,
    rating,
    more,
  } = data;
  return (
    <div className="hero bg-lightGreen min-h-screen">
      <div className="hero-content bg-themeColor min-h-[60vh] rounded-lg mx-24 flex-col lg:flex-row">
        <div className="lg:mr-12">
          <img src={photo} className="max-w-xl lg:w-60 rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <h5>
            <span className="text-2xl font-semibold">By :</span>{" "}
            <span className="text-xl font-bold text-deepGreen">{author}</span>
          </h5>
          <div className="flex items-center gap-3">
            <Rating
              className="my-3"
              initialRating={rating}
              emptySymbol={
                <CiStar color="#02590F" size={32} className="mr-2" />
              }
              fullSymbol={<FaStar color="#02590F" size={32} className="mr-2" />}
              readonly
            />
            <h2 className="text-xl">{rating}/5</h2>
          </div>
          <h2>
            Available Quantity :
            <span className="text-deepGreen font-semibold my-2">
              {quantity}
            </span>
          </h2>
          <h2>
            Category:{" "}
            <span className="text-deepGreen font-semibold my-2">
              {category}
            </span>
          </h2>
          <h2 className="my-2">{shortDescription}</h2>
          <p className="py-2 max-w-2xl">{more}</p>
          <button className="btn bg-deepGreen delay-300  hover:bg-lightGreen text-themeColor">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
