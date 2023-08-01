import Category from '../component/Category';
import MainHeader from '../component/MainHeader';
import '../style/MainPage.scss';
import categories from '../json/category.json';
import { useState } from 'react';
import BottomMenuBar from '../component/BottomMenuBar';
import Ready from '../../common/component/Ready';

const MainPage = () => {
  const [menuFlag, setMenuFlag] = useState(0);

  return (
    <div className="wrapper">
      <div className="mainWrapper">
        <MainHeader menuFlag={menuFlag} setMenuFlag={setMenuFlag} />
        <div className="categoriesWrapper">
          {menuFlag === 0 &&
            categories.category.map((category, index) => {
              return <Category key={index} image={category.image} name={category.name}></Category>;
            })}
          {menuFlag === 1 && <Ready />}
          {menuFlag === 2 &&
            categories.category.map((category, index) => {
              return category.canDonate ? (
                <Category key={index} image={category.image} name={category.name}></Category>
              ) : (
                ''
              );
            })}
        </div>
      </div>
      <BottomMenuBar />
    </div>
  );
};

export default MainPage;
