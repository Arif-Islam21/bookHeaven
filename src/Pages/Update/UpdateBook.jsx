import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (bookData) => {
    console.log(bookData);
  };

  const updateData = useLoaderData();
  console.log(updateData);

  return (
    <div className="bg-lightGreen">
      <section className="p-4 py-12 lg:px-24 mx-auto bg-lightGreen rounded-md ">
        <div>
          <h2 className="text-lg text-center font-semibold text-gray-700 capitalize ">
            Add Book
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="bookName">
                Book Name
              </label>
              <input
                id="bookName"
                {...register("bookName")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="photo">
                Image URL
              </label>
              <input
                id="photo"
                type="text"
                {...register("photo", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="quantity">
                Quantity
              </label>
              <input
                id="quantity"
                {...register("quantity")}
                type="number"
                min={0}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="author">
                Author Name
              </label>
              <input
                id="author"
                {...register("author")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
              />
            </div>
            <div className="">
              <label className="text-gray-700  " htmlFor="category">
                Category
              </label>
              <select
                className="select bg-themeColor text-deepGreen w-full"
                name="category"
                {...register("category")}
                id="category"
              >
                <option value="Novel">Novel</option>
                <option value="Thriller">Thriller</option>
                <option value="History">History</option>
                <option value="Drama">Drama</option>
                <option value="SciFi">Sci-Fi</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700  " htmlFor="shortDescription">
                Short Description
              </label>
              <input
                id="shortDescription"
                {...register("shortDescription")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700  " htmlFor="rating">
                Rating
              </label>
              <input
                id="rating"
                {...register("rating", { required: true })}
                type="number"
                min={0}
                max={5}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700  " htmlFor="moreAbout">
                More About This Book
              </label>
              <input
                id="moreAbout"
                {...register("more")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="flex items-center btn hover:border-deepGreen btn-block bg-deepGreen hover:bg-themeColor hover:text-deepGreen text-themeColor justify-center mt-4 transition-colors duration-300 transform border-none rounded-lg font-bold">
              Update Book
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateBook;
