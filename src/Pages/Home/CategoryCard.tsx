const CategoryCard = ({category}) => {

    const {categoryName, categoryImage} = category;

    return (
        <div className="card image-full w-96 shadow-xl">
  <figure>
    <img
      src={categoryImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div className="flex justify-center items-center h-full">
    <h1 className="text-2xl font-semibold">{categoryName}</h1>
   </div>
  </div>
</div>
    );
};

export default CategoryCard;