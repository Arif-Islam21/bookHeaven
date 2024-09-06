import { useLoaderData } from "react-router-dom";

const Category = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>hi this is category section</div>;
};

export default Category;
