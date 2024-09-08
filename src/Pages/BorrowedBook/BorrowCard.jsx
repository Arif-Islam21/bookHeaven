import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import axios from "axios";

const BorrowCard = ({ card }) => {
  const { _id, author, bookName, deadline, category, photo, rating } = card;

  const handleReturnBook = async (id) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/return/${id}`
    );
    console.log(data);
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="border-b-2 border-deepGreen">
        <img className="py-8 px-2" src={photo} alt={category} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-deepGreen font-bold">Return Date :</span>{" "}
            <span>{deadline}</span>
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
          <button
            onClick={() => handleReturnBook(_id)}
            className="btn bg-deepGreen delay-300  hover:bg-lightGreen text-themeColor"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowCard;
