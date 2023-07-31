import Category from '../component/Category';
import MainHeader from '../component/MainHeader';
import '../style/MainPage.scss';
import categories from '../json/category.json';
import { useState } from 'react';

const MainPage = () => {
  const [menuFlag, setMenuFlag] = useState(0);

  return (
    <>
      <div className="mainWrapper">
        <MainHeader menuFlag={menuFlag} setMenuFlag={setMenuFlag} />
        <div className="categoriesWrapper">
          {categories.category.map((category, index) => {
            if (menuFlag === 0) {
              return <Category key={index} image={category.image} name={category.name}></Category>;
            } else if (menuFlag === 2) {
              return category.canDonate ? (
                <Category key={index} image={category.image} name={category.name}></Category>
              ) : (
                ''
              );
            } else {
              return '';
            }
          })}
        </div>
      </div>
    </>
  );
};

export default MainPage;
