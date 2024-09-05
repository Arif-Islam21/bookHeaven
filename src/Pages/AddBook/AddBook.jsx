import { useForm } from "react-hook-form";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.table(data);
  return (
    <div>
      <section className="p-4 lg:px-24 mx-auto bg-themeColor rounded-md shadow-md dark:bg-gray-800">
        <div>
          <h2 className="text-lg text-center font-semibold text-gray-700 capitalize dark:text-themeColor">
            Add Book
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="bookName"
              >
                Book Name
              </label>
              <input
                id="bookName"
                {...register("bookName")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="photo"
              >
                Image URL
              </label>
              <input
                id="photo"
                type="text"
                {...register("photo")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                id="quantity"
                {...register("quantity")}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="author"
              >
                Author Name
              </label>
              <input
                id="author"
                {...register("author")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="select bg-gray-800 text-white border-gray-600 w-full"
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
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="shortDescription"
              >
                Short Description
              </label>
              <input
                id="shortDescription"
                {...register("shortDescription")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                id="rating"
                {...register("rating")}
                type="number"
                min={0}
                max={5}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="moreAbout"
              >
                More About This Book
              </label>
              <input
                id="moreAbout"
                {...register("more")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-themeColor border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 btn btn-block border-none py-2.5 leading-5 text-themeColor transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add Book
            </button>
          </div>
        </form>
      </section>
      ;
    </div>
  );
};

export default AddBook;
