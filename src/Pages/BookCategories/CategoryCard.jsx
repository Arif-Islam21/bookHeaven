const CategoryCard = ({ book }) => {
  const { category, photo } = book;
  return (
    <div className="avatar flex flex-col p-4">
      <div className=" p-3 bg-themeColor  rounded-full ">
        <div className=" p-10 border-2  border-dashed border-deepGreen  rounded-full">
          <img className="rounded-lg max-h-40" src={photo} />
        </div>
      </div>
      <h2 className="my-4 text-center text-xl font-semibold text-deepGreen">
        {category}
      </h2>
    </div>
  );
};

export default CategoryCard;
