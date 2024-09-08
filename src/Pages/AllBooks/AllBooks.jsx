import { useLoaderData } from "react-router-dom";
import AllBooksCard from "./AllBooksCard";

const AllBooks = () => {
  const data = useLoaderData();
  return (
    <div className="my-12">
      <div className="text-center my-8">
        <h2 className="lg:text-3xl text-xl font-bold">
          Get all our books from here.
        </h2>
        <p className="text-gray-400 lg:max-w-2xl mx-auto py-2">
          We have a huge collection of book in our library. Please select any
          book and start reading . Dont forget to bring your library card .
          Happy Learning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-8">
        {data?.map((card) => (
          <AllBooksCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
