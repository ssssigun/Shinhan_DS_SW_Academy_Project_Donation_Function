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
  const [count, setCount] = useState(1);

  let location = useLocation();
  return (
    <div>
      <StoreForm image={location.state.image}>
        <p className="menuDetailTitle">{location.state.title}</p>
        <p className="menuDetailDetail">{location.state.explain}</p>
        <div className="menuDetailPrice">
          <p>{location.state.title}</p>
          <p> {location.state.price}원</p>
        </div>
        <hr className="menuDetailLine" />
        <div className="menuDetailAmount">
          <p>수량</p>
          <UpDownButton count={count} setCount={setCount} />
        </div>
      </StoreForm>
      {/* 주문하기 버튼 */}
      <OrderBox text={'장바구니에 담기'} nav={'/cart'} />
    </div>
  );
};
export default MenuDetail;
