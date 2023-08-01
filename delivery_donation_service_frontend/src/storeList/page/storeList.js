//가게 목록 페이지

//컴포넌트 불러오기
import CategoryMenuBar from "../component/categoryMenuBar";
import SortOptionBar from "../component/sortOptionBar";
import Store from "../component/store";

// 모듈 불러오기
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

// scss 불러오기
import "../../common/style/reset.scss"
import "../../common/style/common.scss"
import "../style/storeList.scss"

const StoreList = () => {
  const navigate = useNavigate();
    function move(){
      navigate("/store");
    }
    const [check, setCheck] = useState(false);

    return (
      
      <div id="storeListWrapper">
        <div className="topArea">
          <h1>StoreList Test</h1>  {/* 페이지 식별용 */}
          {/* 헤더 자리 */}
          <CategoryMenuBar check={check} setCheck={setCheck}/>
          <SortOptionBar/>
        </div>
        <div className="bottomArea">
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
  