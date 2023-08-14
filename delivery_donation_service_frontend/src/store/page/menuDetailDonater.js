//scss 불러오기
import '../style/menuDetail.scss';
//컴포넌트 불러오기
import StoreForm from '../component/storeForm';
import OrderBox from '../../common/component/orderBox';
import UpDownButton from '../../common/component/UpDownButton';

import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

//텍스트 라인 (가게 정보 및 메뉴)
const MenuDetail = () => {
  const [count, setCount] = useState(1);

  const move = ()=>{
    axios
    .get(`/db/cart/inputC?flag=${0}&userPk=${sessionStorage.getItem('userPk')}&amount=${count}&menuPk=${location.state.menu.menuPk}&storePk=${location.state.store.storePk}`)
    .then((response) => {
      // 성공 처리
      console.log("good");
    })
    .catch((error) => {
      // 에러 처리
      console.error(error);
    }); 
  }
  let location = useLocation();
  return (
    <div>
      <StoreForm image={location.state.menu.menuPicture}>
        <p className="menuDetailTitle">{location.state.menu.menuName}</p>
        <p className="menuDetailDetail">{location.state.menu.detail}</p>
        <div className="menuDetailPrice">
          <p>{location.state.menu.menuName}</p>
          <p> {location.state.menu.menuPrice.toLocaleString()}원</p>
        </div>
        <hr className="menuDetailLine" />
        <div className="menuDetailAmount">
          <p>수량</p>
          <UpDownButton count={count} setCount={setCount} />
        </div>
      </StoreForm>
      {/* 주문하기 버튼 */}
      <OrderBox text={'기부 보따리에 담기'} nav={'/donationCart'} onClick={move}/>
    </div>
  );
};
export default MenuDetail;
