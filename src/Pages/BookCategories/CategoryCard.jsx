const CategoryCard = ({ book }) => {
  const { category, photo } = book;
  return (
    <div className="avatar flex flex-col p-4">
      <div className=" p-3 bg-themeColor  rounded-full ">
        <div className=" lg:p-10 p-4 border-2  border-dashed border-deepGreen  rounded-full">
          <img className="rounded-lg p-4 max-h-40 w-auto" src={photo} />
        </div>
      </div>
      <h2 className="my-4 text-center text-xl font-semibold text-deepGreen">
        {category}
      </h2>
    </div>
  );
};

export default CategoryCard;
