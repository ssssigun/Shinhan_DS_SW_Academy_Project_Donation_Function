import Category from '../component/Category';
import MainMenu from '../component/MainMenu';
import '../style/MainPage.scss';
import categories from '../../common/json/category.json';
import { useState } from 'react';
import BottomMenuBar from '../component/BottomMenuBar';
import Ready from '../../common/component/Ready';
import MainHeader from '../component/MainHeader';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [menuFlag, setMenuFlag] = useState(0);

  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
      <div className="mainWrapper">
        <div className="mainContainer">
          <MainMenu menuFlag={menuFlag} setMenuFlag={setMenuFlag} />
          <div className="categoriesWrapper">
            {menuFlag === 0 &&
              categories.category.map((category, index) => {
                return (
                  <Category
                    key={index}
                    image={category.image}
                    name={category.name}
                    onClick={() => navigate('/storeList', { state: { name: category.name } })}
                  ></Category>
                );
              })}
            {menuFlag === 1 && <Ready />}
            {menuFlag === 2 &&
              categories.category.map((category, index) => {
                return category.canDonate ? (
                  <Category
                    key={index}
                    image={category.image}
                    name={category.name}
                    onClick={() => navigate('/storeList', { state: { name: category.name } })}
                  ></Category>
                ) : (
                  ''
                );
              })}
          </div>
        </div>
      </div>
      <BottomMenuBar />
    </>
  );
};

export default MainPage;
