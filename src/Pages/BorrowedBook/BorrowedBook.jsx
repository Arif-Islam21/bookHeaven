import { useLoaderData } from "react-router-dom";
import BorrowCard from "./BorrowCard";

const BorrowedBook = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 mx-4">
        {data?.map((card) => (
          <BorrowCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default BorrowedBook;
