import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const BookDetails = () => {
  const data = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
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
              readonly={true}
              emptySymbol={
                <CiStar color="#02590F" size={32} className="mr-2" />
              }
              fullSymbol={<FaStar color="#02590F" size={32} className="mr-2" />}
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
          <button
            onClick={() => document.getElementById("borrowBook").showModal()}
            className="btn bg-deepGreen delay-300  hover:bg-lightGreen text-themeColor"
          >
            Borrow Book
          </button>
          <div>
            <dialog
              id="borrowBook"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box border-2 border-deepGreen">
                <h3 className="font-bold text-lg">Borrow {bookName}</h3>
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      defaultValue={user?.displayName}
                      disabled
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Email</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      defaultValue={user?.email}
                      disabled
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Return Date</span>
                    </div>
                    <DatePicker
                      className="border-2 border-deepGreen py-2 px-4 rounded-md"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </label>
                </form>
                <div className="flex justify-around mt-6">
                  <form method="dialog" className="flex justify-around gap-12">
                    <button className="btn btn-outline border-red-600 text-red-600 hover:text-themeColor hover:bg-red-600 px-6">
                      Cancel
                    </button>
                    <button
                      disabled={quantity <= 0}
                      className="btn border-deepGreen text-deepGreen hover:text-themeColor hover:bg-deepGreen px-6"
                    >
                      Borrow
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
