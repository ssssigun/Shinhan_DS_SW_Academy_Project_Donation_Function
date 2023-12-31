//가게 목록 페이지

//컴포넌트 불러오기
import SortOptionBar from '../component/sortOptionBar';
import StoreFree from '../component/storeFree';
import StoreListHeaderDonate from '../component/StoreListHeaderDonate';

//json 불러오기
import categoryData from '../../common/json/category.json';

// 모듈 불러오기
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// scss 불러오기
import '../../common/style/reset.scss';
import '../../common/style/common.scss';
import '../style/storeList.scss';

const StoreList = () => {
  const navigate = useNavigate();
  function move(e) {
    navigate('/storeMainFree', {
      state: {
        storePk: e.storePk,
        category: checkedMenuBar,
      },
    });
  }
  // 카테고리 이름 가져오기 위해서 location 사용
  let location = useLocation();
  const cate = location.state.state ? location.state.state.name : location.state.name;

  const [checkedMenuBar, setCheckedMenuBar] = useState(cate);
  const [storeData, setStoreData] = useState([]);

  // GET 요청
  function selectList(cate) {
    axios
      .get(`/db/selectStoreAndCount?category=${cate}`)
      .then((response) => {
        // 성공 처리
        setStoreData(response.data);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  }

  //처음 렌더링 시 실행
  useEffect(() => {
    selectList(cate);
  }, []);

  // 카테고리 포커스
  const ref = useRef({});
  useEffect(() => {
    ref.current[checkedMenuBar].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'end' });
  }, [checkedMenuBar]);

  return (
    <div id="storeListWrapper">
      <div className="storeListTopArea">
        {/* 헤더 */}
        <StoreListHeaderDonate backUrl="/" cartLink="/cart">
          {checkedMenuBar}
        </StoreListHeaderDonate>
        {/* 메뉴 카테고리 */}
        <div id="categoryMenuBar">
          <ul id="menu">
            {categoryData.category.map((category, idx) =>
              checkedMenuBar === category.name ? (
                category.canDonate ? (
                  <li className="checked" ref={(el) => (ref.current[category.name] = el)} key={idx}>
                    <p>{category.name}</p>
                  </li>
                ) : (
                  ''
                )
              ) : category.canDonate ? (
                <li
                  onClick={() => {
                    setCheckedMenuBar(category.name);
                    selectList(category.name);
                  }}
                  ref={(el) => (ref.current[category.name] = el)}
                  key={idx}
                >
                  <p>{category.name}</p>
                </li>
              ) : (
                ''
              ),
            )}
          </ul>
        </div>
        {/* 가게 정렬 옵션*/}
        <SortOptionBar />
      </div>
      {/* 가게 목록들 */}
      <div className="storeListBottomArea">
        <ul className="storeListWrap">
          {storeData.map((store) => (
            <li className="store" key={store.storePk} onClick={() => move(store)}>
              <StoreFree st={store} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default StoreList;
