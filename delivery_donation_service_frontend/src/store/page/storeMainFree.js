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

// json 파일 불러오기
import MenuData from '../../common/json/menuTest.json'

// 모듈 불러오기
import { useNavigate,useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';

//children 넣어주기
//텍스트 라인 (가게 정보 및 메뉴)
const StoreMain = () => {
  const navigate = useNavigate();
  // 메뉴 상세 페이지로 이동
  // 선택한 메뉴 정보 보내기
    function move(e){
      const selectMenu = e.currentTarget;
      navigate("/menuDetail",{
        state:{
          title : selectMenu.querySelector('.StoreMainMenuTextTitle').innerText,
          explain : selectMenu.querySelector('.StoreMainMenuTextDetail').innerText,
          price : selectMenu.querySelector('.StoreMainMenuTextPrice').innerText,
          image : selectMenu.querySelector('.StoreMainMenuImage').src
        }
      });
    }
    let location = useLocation();

    return (
        <StoreForm image={"/image/test.png"} >
          {/* 제목라인 */}
          <div className="StoreMainTitleArea">
            <p className="StoreMainTitle">{location.state.title}</p>
            <div className="StoreMainInfoArea">
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
                <span>{location.state.review}</span>
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
              {
                MenuData.map(menu=>(
                  <li className="StoreMainMenu" onClick={move}>
                      <div className="StoreMainMenuTextArea">
                        <span className="StoreMainMenuTextTitle">{menu.name}</span>
                        <p className="StoreMainMenuTextDetail">
                          {menu.explain}
                        </p>
                        <p className="StoreMainMenuTextPrice">{menu.Price}</p>
                      </div>
                    <img src={menu.image} alt="" className="StoreMainMenuImage"></img>
                  </li>
                ))
              }
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
