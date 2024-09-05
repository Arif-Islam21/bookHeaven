const CategoryCard = () => {
  return (
    <div className="avatar flex flex-col p-4">
      <div className=" p-3 bg-themeColor  rounded-full ">
        <div className=" p-10 border-2 border-dashed border-deepGreen  rounded-full">
          <img
            className="rounded-lg "
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <h2 className="my-4 text-center text-xl font-semibold text-deepGreen">
        Romance Book
      </h2>
    </div>
  );
};

export default CategoryCard;
