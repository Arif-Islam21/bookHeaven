import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 h-full lg:px-16 bg-lightGreen">
      {data?.map((card) => (
        <CategoryCard key={card._id} card={card} />
      ))}
    </div>
  );
};

export default Category;
