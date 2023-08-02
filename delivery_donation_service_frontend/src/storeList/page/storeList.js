//가게 목록 페이지

//컴포넌트 불러오기
import SortOptionBar from "../component/sortOptionBar";
import Store from "../component/store";
import categoryData from '../../common/json/category.json'

// 모듈 불러오기
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

// scss 불러오기
import "../../common/style/reset.scss"
import "../../common/style/common.scss"
import "../style/storeList.scss"

const StoreList = () => {
  const navigate = useNavigate();
    function move(){
      navigate("/store");
    }
    const [checkedMenuBar, setCheckedMenuBar] = useState(categoryData.category[0].name);

    return (
      
      <div id="storeListWrapper">
        <div className="storeListTopArea">
          <h1>StoreList Test</h1>  {/* 페이지 식별용 */}
            {/* 헤더 자리 */}
          {/* 메뉴 카테고리 */}
          <div id="categoryMenuBar">
            <ul id="menu">
              {
                categoryData.category.map(category => (
                  checkedMenuBar === category.name ?
                  <li className="checked"><p>{category.name}</p></li>
                  :
                  <li onClick={() => setCheckedMenuBar(category.name)}><p>{category.name}</p></li>
                ))
              }
            </ul>
          </div>
          {/* 가게 정렬 옵션*/}
          <SortOptionBar/>
        </div>
        {/* 가게 목록들 */}
        <div className="storeListBottomArea">
          <ul className="storeListWrap">
            <li className="store" onClick={move}><Store/></li>
            <li className="store" onClick={move}><Store/></li>
            <li className="store" onClick={move}><Store/></li>
            <li className="store" onClick={move}><Store/></li>
          </ul>
        </div>
      </div>
    );
  };
  export default StoreList;
   