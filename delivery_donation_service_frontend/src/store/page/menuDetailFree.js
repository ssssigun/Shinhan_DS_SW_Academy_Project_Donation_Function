//scss 불러오기
import '../style/menuDetail.scss';
//컴포넌트 불러오기
import StoreForm from '../component/storeForm';
import OrderBox from '../../common/component/orderBox';
import UpDownButton from '../../common/component/UpDownButton';

import { useLocation } from 'react-router-dom';
import { useState } from 'react';

//텍스트 라인 (가게 정보 및 메뉴)
const MenuDetail = () => {
  const move = () => {};
  let location = useLocation();
  const [count, setCount] = useState(1);

  const blank = () => {};

  return (
    <div>
      <StoreForm image={location.state.menu.menuPicture} cartLink="/cart">
        <p className="menuDetailTitle">{location.state.menu.menuName}</p>
        <p className="menuDetailDetail">{location.state.menu.detail}</p>
        <div className="menuDetailPrice">
          <p>{location.state.menu.menuName}</p>
          <p> </p>
        </div>
        <hr className="menuDetailLine" />
        <div className="menuDetailAmount">
          <p>수량</p>
          <UpDownButton count={count} setCount={blank} />
        </div>
      </StoreForm>
      {/* 주문하기 버튼 */}
      <OrderBox text={'주문하기'} nav={'/orderFreeDelivery'} onClick={move} />
    </div>
  );
};
export default MenuDetail;
