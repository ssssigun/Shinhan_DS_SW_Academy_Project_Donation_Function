//가게 목록 페이지

//컴포넌트 불러오기
import SortOptionBar from "../component/sortOptionBar";
import Store from "../component/store";
import StoreListHeader from"../component/StoreListHeader";

//json 불러오기
import categoryData from '../../common/json/category.json'
import StoreData from '../../common/json/storeTest.json'

//react-icons 불러오기
import {MdOutlineWatchLater} from "react-icons/md";

// 모듈 불러오기
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

// scss 불러오기
import "../../common/style/reset.scss"
import "../../common/style/common.scss"
import "../style/storeList.scss"

const StoreList = () => {
  const navigate = useNavigate();
    function move(e){
      const selectStore = e.currentTarget;
      // console.log(selectStore.querySelector('.title').innerText);
      navigate("/store", {
        state:{
          title : selectStore.querySelector('.title').innerText,
          review : selectStore.querySelector('.smallTextNumber').innerText
        }
      });
    }
    const [checkedMenuBar, setCheckedMenuBar] = useState(categoryData.category[0].name);
    return (
      
      <div id="storeListWrapper">
        <div className="storeListTopArea">
            {/* 헤더 */}
            <StoreListHeader>
              신규 맛집
            </StoreListHeader>
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
            {
              StoreData.map(store => (
                  <li className="store" onClick={move}>
                    <Store st={store}/>
                  </li>
                )
              )
            }
          </ul>
        </div>
      </div>
    );
  };
  export default StoreList;
   