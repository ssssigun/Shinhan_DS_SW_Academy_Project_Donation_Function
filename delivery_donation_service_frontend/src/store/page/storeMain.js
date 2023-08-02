//가게 정보 페이지
//scss 불러오기
import "../style/storeMain.scss"
//컴포넌트 불러오기
import StoreForm from "../component/storeForm";
//react-icons 불러오기
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {AiFillStar} from "react-icons/ai";
import {FaHeart} from "react-icons/fa";
import {TbShare2} from "react-icons/tb";

// 모듈 불러오기
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

//children 넣어주기
//텍스트 라인 (가게 정보 및 메뉴)
const StoreMain = () => {
  const navigate = useNavigate();
    function move(){
      navigate("/menuDetail");
    }

    return (
        <StoreForm image={"/image/test.png"} >
          {/* 제목라인 */}
          <div className="StoreMainTitleArea">
            <p className="StoreMainTitle">오샐러드 강남점</p>
            <div>
              <span className="StoreMainInfo">가게/원산지 정보</span>
              <MdOutlineKeyboardArrowRight className="StoreMainArrowStyle"/>
            </div>
          </div>
          {/* 버튼 라인 */}
          <ul className="StoreMainButtonArea">
            <li>
              <div className="StoreMainButton">
                <AiFillStar className="StoreMainStarStyle"/>
                <span>25</span>
              </div>
              <p>맛있어요</p>
            </li>
            <li>
              <div className="StoreMainButton">
                <FaHeart className="StoreMainHeartStyle"/>
                <span>25</span>
              </div>
              <p>찜하기</p>
            </li>
            <li>
              <div className="StoreMainButton">
                <TbShare2 className="StoreMainShareStyle"/>
              </div>
              <p>공유하기</p>
            </li>
            <li>
              <div className="StoreMainButton">
                <span>27</span>
              </div>
              <p>최근 리뷰</p>
            </li>
          </ul>
          {/* 메뉴 카테고리 라인 */}
          <ul className="StoreMainMenuCategoryArea">
            <li className="StoreMainMenuCategory">
              <p>대표메뉴</p>
            </li>
            <li className="StoreMainMenuCategory">
              <p>치킨</p>
            </li>
            <li className="StoreMainMenuCategory">
              <p>파스타</p>
            </li>
            <li className="StoreMainMenuCategory">
              <p>샐러드</p>
            </li>
          </ul>
          {/* 메뉴 목록 라인 */}
          <div className="StoreMainMenuListArea">
            <p className="StoreMainMenuListAreaTitle">대표메뉴</p>
            <ul className="StoreMainMenuList">
              <li className="StoreMainMenu" onClick={move}>
                <div className="StoreMainMenuTextArea">
                  <span className="StoreMainMenuTextTitle"> 투움바 파스타</span>
                  <p className="StoreMainMenuTextDetail">
                    3단계 신라면 정도의 매콤 버터와 양파, 양송이를 함께 볶고 수제 크림소스와 파마산이 들어간 깊고 진한 치킨과 파스타
                  </p>
                  <p className="StoreMainMenuTextPrice">20,700원</p>
                </div>
                <img src="/image/test2.png" alt="" className="StoreMainMenuImage"></img>
              </li>
            </ul>
          </div>
          {/* 유의사항 */}
          <div className="StoreMainNoticeWrapper">
            <p className="StoreMainNoticeTitle">유의 사항</p>
            <ul className="StoreMainNoticeText">
              <li className="StoreMainNotice"><p>메뉴 사진은 연출된 이미지로 실제 조리된 음식과 다를 수 있습니다.</p></li>
              <li className="StoreMainNotice"><p>상단 메뉴 및 가격은 업소에서 제공한 정보를 기준으로 작성되었으며 변동될 수 있습니다.</p></li>
              <li className="StoreMainNotice"><p>땡겨요는 상품거래에 대한 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서, 땡겨요는 상품 거래정보 및 거래에 대하여 책임을 지지 않습니다.</p></li>
            </ul>
          </div>
        </StoreForm>
    );
  };
  export default StoreMain;
