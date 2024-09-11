import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
  const { _id, author, bookName, category, photo, rating } = card;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="border-b-2 border-deepGreen">
        <img className="py-8 max-h-[40vh] px-2" src={photo} alt={category} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-deepGreen font-bold">Author :</span>{" "}
            <span>{author}</span>
          </p>
          <p>
            <span className="text-deepGreen font-bold">Category :</span>{" "}
            <span>{category}</span>
          </p>
        </div>
        <Rating
          initialRating={rating}
          emptySymbol={<CiStar color="#02590F" size={32} className="mr-2" />}
          fullSymbol={<FaStar color="#02590F" size={32} />}
          readonly
        />
        <div className="card-actions justify-end">
          <Link
            to={`/category/${_id}`}
            className="btn bg-deepGreen delay-300  hover:bg-lightGreen text-themeColor"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
