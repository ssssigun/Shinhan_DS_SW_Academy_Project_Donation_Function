//가게 목록 페이지

//컴포넌트 불러오기
import SortOptionBar from "../component/sortOptionBar";
import StoreDonate from "../component/storeDonate";
import StoreListHeaderDonate from"../component/StoreListHeaderDonate";

//json 불러오기
import categoryData from '../../common/json/category.json'
import StoreData from '../../common/json/storeTest.json'

// 모듈 불러오기
import { useNavigate,useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from'axios';
// scss 불러오기
import "../../common/style/reset.scss"
import "../../common/style/common.scss"
import "../style/storeList.scss"

const StoreList = () => {
  const navigate = useNavigate();
    function move(e){
      const selectStore = e.currentTarget;
      navigate("/storeMainDonater", {
        state:{
          title : selectStore.querySelector('.title').innerText,
          review : selectStore.querySelector('.smallTextNumber').innerText
        }
      });
    }
    // 카테고리 이름 가져오기 위해서 location 사용
    let location = useLocation();

    const [checkedMenuBar, setCheckedMenuBar] = useState(location.state.name);
    const [Menu, selectMenu] = useState();
    // GET 요청
    function displayList(){
      axios.get(`/selectStore?category=${checkedMenuBar}`)
      .then(response => {
        // 성공 처리
        selectMenu(response.data);
        console.log(Menu);
      })
      .catch(error => {
        // 에러 처리
        console.error(error);
      });
    }

    return (
      
      <div id="storeListWrapper">
        <div className="storeListTopArea">
            {/* 헤더 */}
            <StoreListHeaderDonate>
              {checkedMenuBar}
            </StoreListHeaderDonate>
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
                    <StoreDonate st={store}/>
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
   