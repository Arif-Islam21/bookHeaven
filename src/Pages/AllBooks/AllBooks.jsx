import { useLoaderData } from "react-router-dom";
import AllBooksCard from "./AllBooksCard";

const AllBooks = () => {
  const data = useLoaderData();
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-8">
        {data?.map((card) => (
          <AllBooksCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
