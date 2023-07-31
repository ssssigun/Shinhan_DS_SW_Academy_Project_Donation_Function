import '../style/Category.scss';

const Category = ({ image, name }) => {
  return (
    <div className="categoryWrapper">
      <div className="imageWrapper">
        <img src={image} alt="카테고리" />
      </div>
      <div className="categoryName">{name}</div>
    </div>
  );
};

export default Category;
