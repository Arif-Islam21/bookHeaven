import { useLoaderData } from "react-router-dom";
import BorrowCard from "./BorrowCard";
import { useEffect, useState } from "react";

const BorrowedBook = () => {
  const [borrowData, setBorrowData] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if (data) {
      setBorrowData(data);
    }
  }, [data]);

  return (
    <div>
      <div className="text-center my-8">
        <h2 className="lg:text-3xl text-xl font-bold">
          Books You Have Borrowed
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto py-2">
          You have opoptunity to borrow book from out library. But you have to
          return the book after your deadline. Dont forget to bring your library
          card while you return . Happy Learning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 mx-4">
        {borrowData?.map((card) => (
          <BorrowCard
            key={card._id}
            card={card}
            borrowData={borrowData}
            setBorrowData={setBorrowData}
          />
        ))}
      </div>
    </div>
  );
};

export default BorrowedBook;
